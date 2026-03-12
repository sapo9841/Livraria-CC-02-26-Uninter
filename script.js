const livros = [
    { titulo: "A Arte da Estatística", autor: "David Spiegelhalter", arquivo: "Livros/A arte da estatistica_ Como apr - David Spiegelhalter.pdf" },
    { titulo: "Algoritmos: Teoria e Prática", autor: "Thomas Cormen", arquivo: "Livros/Algoritmos Teoria e Pratica - Thomas Cormen.pdf" },
    { titulo: "Automatize Tarefas Maçantes com Python", autor: "Al Sweigart", arquivo: "Livros/Automatize tarefas macantes com - Al Sweigart.pdf" },
    { titulo: "C Completo e Total", autor: "Herbert Schildt", arquivo: "Livros/C Completo e Total - ProgDan(r) Software.pdf" },
    { titulo: "Como Quebrar Códigos", autor: "Anônimo", arquivo: "Livros/Como quebrar Codigos - anonymous.pdf" },
    { titulo: "Conceitos de Linguagens de Programação", autor: "Robert W. Sebesta", arquivo: "Livros/Conceitos de Linguagens de Prog - Robert W. Sebesta.pdf" },
    { titulo: "Desenvolvimento de Games", autor: "Jeannie Novak", arquivo: "Livros/Desenvolvimento de Games - Jeannie Novak.pdf" },
    { titulo: "DevOps Nativo de Nuvem com Kubernetes", autor: "John Arundel", arquivo: "Livros/DevOps nativo de nuvem com Kube - John Arundel.pdf" },
    { titulo: "Eletrônica Básica para Arduino", autor: "Paulo Edson Mazzei", arquivo: "Livros/Eletronica Basica para o Arduin - Paulo Edson Mazzei.pdf" },
    { titulo: "Engenharia de Software", autor: "Ian Sommerville", arquivo: "Livros/Engenharia de software - Ian Sommerville.pdf" },
    { titulo: "Engenharia de Software para Ciência", autor: "Desconhecido", arquivo: "Livros/Engenharia de Software para Cie - Desconhecido.pdf" },
    { titulo: "Entendendo Algoritmos", autor: "Aditya Bhargava", arquivo: "Livros/Entendendo Algoritmos_ Um guia ilustrado paores e outros curiosos - Aditya Y. Bhargava.pdf" },
    { titulo: "Estatística: O que é, para que serve", autor: "Charles Wheelan", arquivo: "Livros/Estatistica O que e, para que s - Desconhecido.pdf" },
    { titulo: "Excel VBA e Macros", autor: "Luiz Felipe Araújo", arquivo: "Livros/Excel VBA e Macros_ Passo a Pas - Luiz Felipe Araujo.pdf" },
    { titulo: "Fundamentos de Engenharia de Dados", autor: "Joe Reis", arquivo: "Livros/Fundamentos de Engenharia de Da - Desconhecido.pdf" },
    { titulo: "Head First C (Use a Cabeça)", autor: "David Griffiths", arquivo: "Livros/Head First C David Griffiths, D - Desconhecido.pdf" },
    { titulo: "HTML5 e CSS3", autor: "Casa do Código", arquivo: "Livros/HTML5 e CSS3 - Domine a web do futuro.pdf" },
    { titulo: "Java: Como Programar", autor: "Paul Deitel & Harvey Deitel", arquivo: "Livros/Java Como programar - Paul Deitel , Harvey Deitel.pdf" },
    { titulo: "JavaScript de Alto Desempenho", autor: "Nicholas C. Zakas", arquivo: "Livros/JavaScript de Alto Desempenho - Nicholas C. Zakas.pdf" },
    { titulo: "JavaScript: O Guia Definitivo", autor: "David Flanagan", arquivo: "Livros/JavaScript O Guia Definitivo v - Desconhecido.pdf" },
    { titulo: "Linguagens de Programação", autor: "Laércio Metzner", arquivo: "Livros/Linguagens de Programacao - Laercio Metzner.pdf" },
    { titulo: "Linux: A Bíblia", autor: "Christopher Negus", arquivo: "Livros/Linux - A Biblia, Traducao da 8 - Christopher Negus com a colabor.pdf" },
    { titulo: "Lógica de Programação e Estruturas", autor: "Anônimo", arquivo: "Livros/Logica de Programacao e Estrutu - anonymous.pdf" },
    { titulo: "O Programador Pragmático", autor: "Andrew Hunt & David Thomas", arquivo: "Livros/O programador pragmatico de apr - Andrew Hunt; David Thomas.pdf" },
    { titulo: "Pense em Python", autor: "Allen B. Downey", arquivo: "Livros/Pense em Python - Terceira Edic - Allen B. Downey.pdf" },
    { titulo: "Pré-Cálculo", autor: "Marcos Lima", arquivo: "Livros/Pre-Calculo - Marcos Lima.pdf" },
    { titulo: "Pré-Cálculo: Coleção Schaum", autor: "Fred Safier", arquivo: "Livros/Pre-Calculo_ Colecao Schaum - Fred Safier.pdf" },
    { titulo: "Programação com ARDUINO", autor: "Simon Monk", arquivo: "Livros/Programacao com ARDUINO - Simon Monk.pdf" },
    { titulo: "Programação de Rede Unix", autor: "W. Richard Stevens", arquivo: "Livros/Programacao de Rede Unix - Api - Stevens, W. Richard; Fenner, Bi.pdf" },
    { titulo: "Programação Orientada a Objetos", autor: "Cristiano Roberto Franco", arquivo: "Livros/Programacao Orientada a Objetos - Cristiano Roberto Franco.pdf" },
    { titulo: "Programação para Web", autor: "Cristiano Roberto Franco", arquivo: "Livros/Programacao para Web - Cristiano Roberto Franco.pdf" },
    { titulo: "Python e R para Cientista de Dados", autor: "Rick J. Scavetta", arquivo: "Livros/Python e R para o Cientista de - Rick J. Scavetta.pdf" },
    { titulo: "Python: Escreva seus primeiros passos", autor: "Desconhecido", arquivo: "Livros/Python Escreva seus primeiros p - Desconhecido.pdf" },
    { titulo: "Redes de Computadores e a Internet", autor: "James F. Kurose", arquivo: "Livros/Redes de computadores e a Inter - James F. Kurose.pdf" },
    { titulo: "Sistemas Digitais: Fundamentos", autor: "Thomas Floyd", arquivo: "Livros/Sistemas Digitais_ Fundamentos - Thomas Floyd.pdf" },
    { titulo: "Sistemas e Aplicações Distribuídas", autor: "Carlos André Rocha", arquivo: "Livros/Sistemas e Aplicacoes Distribui - Carlos Andre de Sousa Rocha , M.pdf" },
    { titulo: "Sistemas Operacionais: Projeto", autor: "Andrew S. Tanenbaum", arquivo: "Livros/Sistemas Operacionais - Projeto - Tanenbaum, Andrew S_.pdf" },
    { titulo: "Sistemas Operacionais Modernos", autor: "Andrew S. Tanenbaum", arquivo: "Livros/Sistemas Operacionais Modernos - Andrew S Tanenbaum.pdf" },
    { titulo: "Sistemas Operacionais Modernos (Ed. Nova)", autor: "Tanenbaum & Bos", arquivo: "Livros/Sistemas Operacionais Modernos - Andrew Tanenbaum , Herbert Bos.pdf" },
    { titulo: "Soft Skills Kids", autor: "Beatriz Montenegro", arquivo: "Livros/Soft skills kids_ como desenvol - Beatriz Montenegro.pdf" },
    { titulo: "SQL: Guia Prático", autor: "Alice Zhao", arquivo: "Livros/SQL Guia Pratico (Alice Zhao) ( - Desconhecido.pdf" },
    { titulo: "SQL para Análise de Dados", autor: "Cathy Tanimura", arquivo: "Livros/SQL para Analise de Dados (Cath - Desconhecido.pdf" },
    { titulo: "Organização Estruturada de Computadores", autor: "Andrew S. Tanenbaum", arquivo: "Livros/Tanenbaum - Organizacao Estrutu - 6a.pdf" },
    { titulo: "Use a Cabeça! Python", autor: "Paul Barry", arquivo: "Livros/Use a cabeca Python - 3a Edicao - Paul Barry.pdf" },
    { titulo: "Use a Cabeça! SQL", autor: "Lynn Beighley", arquivo: "Livros/Use a Cabeca SQL Lynn Beighley - Desconhecido.pdf" },
    { titulo: "VBA Excel", autor: "John Walkenbach", arquivo: "Livros/VBA Excel.indd - WALKENBACH , JOHN.pdf" }
];

const MAX_UPLOAD_BYTES = 200 * 1024 * 1024;

const estante        = document.getElementById('estante');
const campoBusca     = document.getElementById('campoBusca');
const pdfModal       = document.getElementById('pdfModal');
const pdfViewer      = document.getElementById('pdfViewer');
const modalTitulo    = document.getElementById('modalTitulo');
const modalAutor     = document.getElementById('modalAutor');
const modalCloseBtn  = document.getElementById('modalCloseBtn');
const modalDownload  = document.getElementById('modalDownloadBtn');

const uploadToggleBtn  = document.getElementById('uploadToggleBtn');
const uploadPanel      = document.getElementById('uploadPanel');
const uploadDropZone   = document.getElementById('uploadDropZone');
const pdfFileInput     = document.getElementById('pdfFileInput');
const uploadTitulo     = document.getElementById('uploadTitulo');
const uploadAutor      = document.getElementById('uploadAutor');
const uploadSubmitBtn  = document.getElementById('uploadSubmitBtn');
const uploadNotice     = document.getElementById('uploadNotice');

let activeObjectUrl = null;
let pendingUpload   = null;

function sanitizeText(str) {
    return str.replace(/[<>&"']/g, (c) => ({ '<':'&lt;', '>':'&gt;', '&':'&amp;', '"':'&quot;', "'":'&#39;' }[c]));
}

function openViewer(titulo, autor, url, downloadFilename) {
    modalTitulo.textContent = titulo;
    modalAutor.textContent  = autor;
    pdfViewer.src           = url;
    modalDownload.href      = url;
    modalDownload.download  = downloadFilename || titulo + '.pdf';
    pdfModal.hidden         = false;
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
}

function closeViewer() {
    pdfModal.hidden  = true;
    pdfViewer.src    = '';
    document.body.style.overflow = '';
    if (activeObjectUrl) {
        URL.revokeObjectURL(activeObjectUrl);
        activeObjectUrl = null;
    }
}

function mostrarLivros(lista) {
    estante.innerHTML = '';
    lista.forEach(livro => {
        const cartao = document.createElement('div');
        cartao.classList.add('livro-item');
        if (livro.isUploaded) cartao.classList.add('uploaded');

        let capaHtml;
        if (livro.capaObjectUrl) {
            capaHtml = `<img src="${livro.capaObjectUrl}" alt="Capa">`;
        } else {
            const nomeArquivoSomente = livro.arquivo.replace('Livros/', '').replace('.pdf', '');
            const capaUrl = `Capas/${encodeURIComponent(nomeArquivoSomente)}.jpg`;
            capaHtml = `<img src="${capaUrl}" alt="Capa" onerror="this.style.visibility='hidden'">`;
        }

        const badgeHtml = livro.isUploaded ? '<span class="livro-badge">Enviado</span>' : '';

        cartao.innerHTML = `
            ${capaHtml}
            <h3>${sanitizeText(livro.titulo)}</h3>
            <p style="font-size:12px;color:#aaa;">${sanitizeText(livro.autor)}</p>
            ${badgeHtml}
        `;

        cartao.addEventListener('click', () => {
            if (livro.objectUrl) {
                openViewer(livro.titulo, livro.autor, livro.objectUrl, livro.titulo);
            } else {
                openViewer(livro.titulo, livro.autor, livro.arquivo, livro.titulo);
            }
        });

        estante.appendChild(cartao);
    });
}

campoBusca.addEventListener('input', () => {
    const termo = campoBusca.value.toLowerCase().trim();
    const filtrados = livros.filter(l =>
        l.titulo.toLowerCase().includes(termo) ||
        l.autor.toLowerCase().includes(termo)
    );
    mostrarLivros(filtrados);
});

modalCloseBtn.addEventListener('click', closeViewer);

pdfModal.addEventListener('click', (e) => {
    if (e.target === pdfModal) closeViewer();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !pdfModal.hidden) closeViewer();
});

uploadToggleBtn.addEventListener('click', () => {
    const isOpen = !uploadPanel.hidden;
    uploadPanel.hidden = isOpen;
    uploadToggleBtn.setAttribute('aria-expanded', String(!isOpen));
});

function validatePdfFile(file) {
    if (!file) return 'Nenhum arquivo selecionado.';
    if (file.type !== 'application/pdf') return 'Apenas arquivos PDF são permitidos.';
    if (file.size > MAX_UPLOAD_BYTES) return 'O arquivo excede o limite de 200 MB.';
    if (!file.name.toLowerCase().endsWith('.pdf')) return 'A extensão do arquivo deve ser .pdf.';
    return null;
}

function setNotice(msg, type) {
    uploadNotice.textContent = msg;
    uploadNotice.className   = 'upload-notice ' + (type || '');
}

function handleFileSelection(file) {
    const error = validatePdfFile(file);
    if (error) {
        setNotice(error, 'error');
        pendingUpload = null;
        uploadSubmitBtn.disabled = true;
        return;
    }
    pendingUpload = file;
    setNotice(`Arquivo selecionado: ${file.name}`, 'success');
    uploadSubmitBtn.disabled = false;
}

pdfFileInput.addEventListener('change', () => {
    if (pdfFileInput.files.length > 0) handleFileSelection(pdfFileInput.files[0]);
});

uploadDropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadDropZone.classList.add('drag-over');
});

uploadDropZone.addEventListener('dragleave', () => {
    uploadDropZone.classList.remove('drag-over');
});

uploadDropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadDropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelection(file);
});

uploadDropZone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        pdfFileInput.click();
    }
});

async function generateCover(file) {
    if (!window.pdfjsLib) return null;
    try {
        const loadingTask = window.pdfjsLib.getDocument({ url: URL.createObjectURL(file) });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext('2d');
        await page.render({ canvasContext: context, viewport }).promise;
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        URL.revokeObjectURL(loadingTask._pdfData);
        return dataUrl;
    } catch {
        return null;
    }
}

uploadSubmitBtn.addEventListener('click', async () => {
    if (!pendingUpload) return;

    const error = validatePdfFile(pendingUpload);
    if (error) {
        setNotice(error, 'error');
        return;
    }

    const titulo = uploadTitulo.value.trim() || pendingUpload.name.replace(/\.pdf$/i, '');
    const autor  = uploadAutor.value.trim()  || 'Desconhecido';

    const objectUrl = URL.createObjectURL(pendingUpload);
    const capaObjectUrl = await generateCover(pendingUpload);

    const novoLivro = {
        titulo,
        autor,
        arquivo: pendingUpload.name,
        objectUrl,
        capaObjectUrl,
        isUploaded: true,
    };

    livros.unshift(novoLivro);

    const termo = campoBusca.value.toLowerCase().trim();
    const filtrados = livros.filter(l =>
        l.titulo.toLowerCase().includes(termo) ||
        l.autor.toLowerCase().includes(termo)
    );
    mostrarLivros(filtrados);

    setNotice(`"${titulo}" adicionado à estante com sucesso!`, 'success');
    uploadTitulo.value      = '';
    uploadAutor.value       = '';
    pdfFileInput.value      = '';
    pendingUpload           = null;
    uploadSubmitBtn.disabled = true;

    setTimeout(() => {
        uploadPanel.hidden = true;
        uploadToggleBtn.setAttribute('aria-expanded', 'false');
        setNotice('', '');
    }, 2000);
});

mostrarLivros(livros);

window.addEventListener('load', () => {
    if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
});
