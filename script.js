// Sapo9841 🐸
let livros = [];

const estante = document.getElementById('estante');
const campoBusca = document.getElementById('campoBusca');
const ordemAlfabetica = document.getElementById('ordemAlfabetica');

function criarPlaceholderCapa(tituloLivro) {
    const tituloCurto = (tituloLivro || 'Livro').slice(0, 42);
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 450" width="300" height="450">
            <defs>
                <linearGradient id="fundo" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stop-color="#2a2a2a"/>
                    <stop offset="100%" stop-color="#3c3c3c"/>
                </linearGradient>
            </defs>
            <rect width="300" height="450" fill="url(#fundo)"/>
            <rect x="22" y="22" width="256" height="406" fill="none" stroke="#666" stroke-width="2" rx="8"/>
            <text x="150" y="205" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="18" fill="#d0d0d0">Capa nao</text>
            <text x="150" y="232" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="18" fill="#d0d0d0">disponivel</text>
            <text x="150" y="285" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#9f9f9f">${tituloCurto}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function normalizarNomeArquivo(nomeArquivo) {
    const semExtensao = nomeArquivo.replace(/\.pdf$/i, '');
    return semExtensao
        .replace(/[_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function criarLivroDoArquivo(nomeArquivo) {
    const nomeLimpo = normalizarNomeArquivo(nomeArquivo);
    const partes = nomeLimpo.split(' - ').map((parte) => parte.trim()).filter(Boolean);

    const titulo = partes[0] || nomeLimpo;
    const autorCru = partes.length > 1 ? partes[partes.length - 1] : 'Autor nao informado';
    const autor = autorCru.replace(/^Autor\s*/i, '').replace(/[()]/g, '').trim() || 'Autor nao informado';

    return {
        titulo,
        autor,
        arquivo: `Livros/${encodeURIComponent(nomeArquivo)}`,
        nomeArquivo
    };
}

function extrairNomesPdfDoHtml(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const links = Array.from(doc.querySelectorAll('a[href]'));

    const nomes = links
        .map((link) => {
            const href = link.getAttribute('href') || '';
            if (!/\.pdf(?:$|[?#])/i.test(href)) {
                return '';
            }

            const caminho = href.split('?')[0].split('#')[0];
            const nomeArquivo = caminho.split('/').pop() || '';
            return decodeURIComponent(nomeArquivo);
        })
        .filter(Boolean);

    return [...new Set(nomes)];
}

async function carregarLivrosDaPasta() {
    const resposta = await fetch('Livros/');
    if (!resposta.ok) {
        throw new Error('Nao foi possivel acessar /Livros');
    }

    const html = await resposta.text();
    const nomesPdf = extrairNomesPdfDoHtml(html);

    if (nomesPdf.length === 0) {
        throw new Error('Nenhum PDF encontrado em /Livros');
    }

    return nomesPdf.map(criarLivroDoArquivo);
}

function mostrarLivros(lista) {
    estante.innerHTML = '';

    if (lista.length === 0) {
        estante.innerHTML = '<p>Nenhum livro encontrado.</p>';
        return;
    }

    lista.forEach((livro) => {
        const cartao = document.createElement('div');
        cartao.classList.add('livro-item');

        const nomeArquivoSomente = livro.nomeArquivo.replace(/\.pdf$/i, '');
        const capaUrl = `Capas/${encodeURIComponent(nomeArquivoSomente)}.jpg`;

        cartao.innerHTML = `
            <img src="${capaUrl}" alt="Capa de ${livro.titulo}">
            <h3>${livro.titulo}</h3>
            <p style="font-size: 12px; color: #aaa;">${livro.autor}</p>
        `;

        const imagemCapa = cartao.querySelector('img');
        imagemCapa.addEventListener('error', () => {
            imagemCapa.src = criarPlaceholderCapa(livro.titulo);
            imagemCapa.alt = `Capa nao disponivel para ${livro.titulo}`;
        }, { once: true });

        cartao.onclick = () => window.open(livro.arquivo, '_blank');
        estante.appendChild(cartao);
    });
}

function aplicarFiltrosEOrdenacao() {
    const termo = campoBusca.value.toLowerCase().trim();

    const filtrados = livros.filter((livro) => {
        return (
            livro.titulo.toLowerCase().includes(termo) ||
            livro.autor.toLowerCase().includes(termo)
        );
    });

    filtrados.sort((a, b) => {
        const resultado = a.titulo.localeCompare(b.titulo, 'pt-BR', { sensitivity: 'base' });
        return ordemAlfabetica.value === 'za' ? -resultado : resultado;
    });

    mostrarLivros(filtrados);
}

async function iniciarEstante() {
    estante.innerHTML = '<p>Carregando livros...</p>';

    try {
        livros = await carregarLivrosDaPasta();
        aplicarFiltrosEOrdenacao();
    } catch (erro) {
        estante.innerHTML = `
            <p>Nao foi possivel listar automaticamente os arquivos da pasta /Livros.</p>
            <p style="font-size: 12px; color: #aaa;">Detalhe: ${erro.message}</p>
        `;
    }
}

campoBusca.addEventListener('input', aplicarFiltrosEOrdenacao);
ordemAlfabetica.addEventListener('change', aplicarFiltrosEOrdenacao);

iniciarEstante();
