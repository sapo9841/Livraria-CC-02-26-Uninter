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

const estante = document.getElementById('estante');
const campoBusca = document.getElementById('campoBusca');

function mostrarLivros(lista) {
    estante.innerHTML = ""; 
    lista.forEach(livro => {
        const cartao = document.createElement('div');
        cartao.classList.add('livro-item');
        
        const nomeBase = livro.arquivo.replace("Livros/", "").replace(".pdf", "");
        const capaUrl = `capas/${nomeBase}.jpg`;

        cartao.innerHTML = `
            <img src="${capaUrl}" alt="Capa">
            <h3>${livro.titulo}</h3>
            <p style="font-size: 12px; color: #aaa;">${livro.autor}</p>
        `;

        cartao.onclick = () => window.open(livro.arquivo, '_blank');
        estante.appendChild(cartao);
    });
}

campoBusca.addEventListener('input', () => {
    const termo = campoBusca.value.toLowerCase();
    const filtrados = livros.filter(l => 
        l.titulo.toLowerCase().includes(termo) || 
        l.autor.toLowerCase().includes(termo)
    );
    mostrarLivros(filtrados);
});

mostrarLivros(livros);