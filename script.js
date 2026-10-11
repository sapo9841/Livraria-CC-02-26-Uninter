// Sapo9841 🐸
// Os dados dos livros ficam em livros.js (carregado antes deste arquivo).

const estante = document.getElementById('estante');
const campoBusca = document.getElementById('campoBusca');
const seletorOrdem = document.getElementById('ordemAlfabetica');
const filtroCategorias = document.getElementById('filtroCategorias');
const contador = document.getElementById('contador');

const TODAS = 'Todas';
let categoriaAtiva = TODAS;

// Remove acentos e ignora maiúsculas: "programacao" encontra "Programação".
const normalizar = (texto) =>
    texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

// Texto de busca pré-calculado uma única vez por livro.
livros.forEach((livro) => {
    livro._busca = normalizar(`${livro.titulo} ${livro.autor} ${livro.categoria}`);
});

const comparar = (a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' });

const ORDENACOES = {
    az: (a, b) => comparar(a.titulo, b.titulo),
    za: (a, b) => comparar(b.titulo, a.titulo),
    autor: (a, b) => comparar(a.autor, b.autor) || comparar(a.titulo, b.titulo)
};

const CAPA_RESERVA = (() => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 450" width="300" height="450">
            <rect width="300" height="450" fill="#2d2d2d"/>
            <text x="150" y="200" text-anchor="middle" font-family="Arial" font-size="20" fill="#888">Capa</text>
            <text x="150" y="235" text-anchor="middle" font-family="Arial" font-size="14" fill="#666">Indisponível</text>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
})();

// Codifica cada parte do caminho para suportar nomes com espaços, #, %, etc.
const codificarCaminho = (caminho) => caminho.split('/').map(encodeURIComponent).join('/');

function urlDaCapa(livro) {
    const nomeSemPasta = livro.arquivo.replace(/^Livros\//, '').replace(/\.pdf$/i, '');
    return `Capas/${encodeURIComponent(nomeSemPasta)}.jpg`;
}

function criarCartao(livro) {
    // <a> em vez de <div onclick>: funciona com teclado, leitor de tela e clique do meio.
    const cartao = document.createElement('a');
    cartao.className = 'livro-item';
    cartao.href = codificarCaminho(livro.arquivo);
    cartao.target = '_blank';
    cartao.rel = 'noopener noreferrer';
    cartao.title = `Abrir o PDF de ${livro.titulo}`;

    const capa = document.createElement('img');
    capa.loading = 'lazy';
    capa.alt = `Capa do livro ${livro.titulo}`;
    capa.src = urlDaCapa(livro);
    capa.addEventListener('error', () => { capa.src = CAPA_RESERVA; }, { once: true });

    // textContent evita que "<", "&" ou aspas nos títulos quebrem a página.
    const titulo = document.createElement('h3');
    titulo.textContent = livro.titulo;

    const autor = document.createElement('p');
    autor.className = 'livro-autor';
    autor.textContent = livro.autor;

    cartao.append(capa, titulo, autor);
    return cartao;
}

function obterLivrosVisiveis() {
    const termos = normalizar(campoBusca.value).split(/\s+/).filter(Boolean);
    const ordenar = ORDENACOES[seletorOrdem.value] || ORDENACOES.az;

    return livros
        .filter((livro) =>
            (categoriaAtiva === TODAS || livro.categoria === categoriaAtiva) &&
            termos.every((termo) => livro._busca.includes(termo)))
        .sort(ordenar);
}

function limparFiltros() {
    campoBusca.value = '';
    categoriaAtiva = TODAS;
    atualizar();
    campoBusca.focus();
}

function mostrarVazio() {
    const aviso = document.createElement('div');
    aviso.className = 'sem-resultados';

    const texto = document.createElement('p');
    texto.textContent = 'Nenhum livro encontrado com esses filtros.';

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = 'Limpar filtros';
    botao.addEventListener('click', limparFiltros);

    aviso.append(texto, botao);
    estante.replaceChildren(aviso);
}

function atualizarContador(visiveis) {
    const total = livros.length;
    contador.textContent = visiveis === total
        ? `${total} livros`
        : `${visiveis} de ${total} livros`;
}

function sincronizarUrl() {
    // Guarda busca/categoria/ordem no endereço para poder compartilhar o link filtrado.
    const params = new URLSearchParams();
    if (campoBusca.value.trim()) params.set('q', campoBusca.value.trim());
    if (categoriaAtiva !== TODAS) params.set('cat', categoriaAtiva);
    if (seletorOrdem.value !== 'az') params.set('ordem', seletorOrdem.value);
    const query = params.toString();
    history.replaceState(null, '', query ? `?${query}` : location.pathname);
}

function atualizar() {
    const visiveis = obterLivrosVisiveis();

    if (visiveis.length === 0) {
        mostrarVazio();
    } else {
        const fragmento = document.createDocumentFragment();
        visiveis.forEach((livro) => fragmento.appendChild(criarCartao(livro)));
        estante.replaceChildren(fragmento);
    }

    atualizarContador(visiveis.length);
    marcarCategoriaAtiva();
    sincronizarUrl();
}

function criarChip(nome, quantidade) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.dataset.categoria = nome;
    chip.textContent = `${nome} (${quantidade})`;
    chip.addEventListener('click', () => {
        categoriaAtiva = nome;
        atualizar();
    });
    return chip;
}

function montarCategorias() {
    const contagem = new Map();
    livros.forEach((livro) => {
        contagem.set(livro.categoria, (contagem.get(livro.categoria) || 0) + 1);
    });

    const nomes = [...contagem.keys()].sort((a, b) =>
        a === 'Outros' ? 1 : b === 'Outros' ? -1 : comparar(a, b));

    filtroCategorias.replaceChildren(
        criarChip(TODAS, livros.length),
        ...nomes.map((nome) => criarChip(nome, contagem.get(nome)))
    );
}

function marcarCategoriaAtiva() {
    filtroCategorias.querySelectorAll('.chip').forEach((chip) => {
        const ativo = chip.dataset.categoria === categoriaAtiva;
        chip.classList.toggle('ativo', ativo);
        chip.setAttribute('aria-pressed', String(ativo));
    });
}

function lerUrlInicial() {
    const params = new URLSearchParams(location.search);
    campoBusca.value = params.get('q') || '';

    const cat = params.get('cat');
    if (cat && livros.some((livro) => livro.categoria === cat)) categoriaAtiva = cat;

    const ordem = params.get('ordem');
    if (ordem && ORDENACOES[ordem]) seletorOrdem.value = ordem;
}

campoBusca.addEventListener('input', atualizar);
seletorOrdem.addEventListener('change', atualizar);

montarCategorias();
lerUrlInicial();
atualizar();

// Sapo9841 🐸
