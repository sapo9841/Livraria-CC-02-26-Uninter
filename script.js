//Sapo9841 🐸
const livros = [
    { titulo: "A Arte da Estatística", autor: "David Spiegelhalter", arquivo: "Livros/A arte da estatistica_ Como apr - David Spiegelhalter.pdf" },
    { titulo: "A Arte de Dar Feedback", autor: "HBR", arquivo: "Livros/A arte de dar feedback (Um guia - Harvard Business Review.pdf" },
    { titulo: "A Jornada do Empreendedor", autor: "Casa do Código", arquivo: "Livros/A jornada do empreendedor - O h - Autor (Casa do Codigo).pdf" },
    { titulo: "A Regra é Não Ter Regras", autor: "Reed Hastings", arquivo: "Livros/A Regra e nao ter Regras - Reed Hastings e Erin Meyer.pdf" },
    { titulo: "A Startup Enxuta", autor: "Eric Ries", arquivo: "Livros/A Startup Enxuta - Eric Ries.pdf" },
    { titulo: "A Web Mobile", autor: "Casa do Código", arquivo: "Livros/A Web Mobile - Programe para um - Autor (Casa do Codigo).pdf" },
    { titulo: "Agile - Desenv. de Software", autor: "Casa do Código", arquivo: "Livros/Agile - Desenvolvimento de Soft - Autor (Casa do Codigo).pdf" },
    { titulo: "Agile Project Management", autor: "Ken Schwaber", arquivo: "Livros/Agile Project Management with S - Autor (Ken Schwaber).pdf" },
    { titulo: "Agile Retrospectives", autor: "Esther Derby", arquivo: "Livros/Agile Retrospectives - Making G - Autor (Esther Derby).pdf" },
    { titulo: "Algoritmos: Teoria e Prática", autor: "Thomas Cormen", arquivo: "Livros/Algoritmos Teoria e Pratica - Thomas Cormen.pdf" },
    { titulo: "Amazon AWS Descomplicando a Computação na Nuvem", autor: "Casa do Código", arquivo: "Livros/Amazon AWS - Descomplicando a c - Autor (Casa do Codigo).pdf" },
    { titulo: "Node.js: Aplicações web real time", autor: "Casa do Código", arquivo: "Livros/Aplicacoes web real time com No - Autor (Casa do Codigo).pdf" },
    { titulo: "Apprenticeship Patterns", autor: "Dave Hoover", arquivo: "Livros/Apprenticeship Patterns_ Guidan - Dave Hoover, Adewale Oshineye.pdf" },
    { titulo: "Arquitetura Limpa", autor: "Robert C. Martin", arquivo: "Livros/Arquitetura Limpa (Robert C. Ma - Robert C. Martin.pdf" },
    { titulo: "Automatize Tarefas Maçantes com Python", autor: "Al Sweigart", arquivo: "Livros/Automatize tarefas macantes com - Al Sweigart.pdf" },
    { titulo: "AWS Certified DevOps Engineer", autor: "Adam Book", arquivo: "Livros/AWS Certified DevOps Engineer - - Autor (Adam Book).pdf" },
    { titulo: "AWS Certified Solutions Architect", autor: "Jon Bonso", arquivo: "Livros/AWS Certified Solutions Archite - Autor (Jon Bonso).pdf" },
    { titulo: "AWS For Beginners", autor: "Steve Burnett", arquivo: "Livros/AWS FOR BEGINNERS_ THE ULTIMATE - BURNETT, STEVE.pdf" },
    { titulo: "AWS for Non-Engineers", autor: "Hiroko Nishimura", arquivo: "Livros/AWS for Non-Engineers - Hiroko Nishimura.pdf" },
    { titulo: "Azure: Coloque suas plataformas e serviços no cloud", autor: "Thiago Custódio", arquivo: "Livros/Azure_ Coloque suas plataformas - Thiago Custodio.pdf" },
    { titulo: "BDD in Action", autor: "John Ferguson Smart", arquivo: "Livros/BDD in Action - John Ferguson Smart.pdf" },
    { titulo: "Big Data: Técnicas e tecnologias para extração de valor de dados", autor: "Rosângela Pereira", arquivo: "Livros/Big Data_ tecnicas e tecnologia - Rosangela Fatima Pereira.pdf" },
    { titulo: "Business Intelligence: Implementar do jeito certo e a custo zero", autor: "Casa do Código", arquivo: "Livros/Business Intelligence - Impleme - Autor (Casa do Codigo).pdf" },
    { titulo: "But How Do It Know?", autor: "J. Clark Scott", arquivo: "Livros/But How Do It Know_ - The Basic - Scott, J Clark.pdf" },
    { titulo: "C Completo e Total", autor: "Herbert Schildt", arquivo: "Livros/C Completo e Total - ProgDan(r) Software.pdf" },
    { titulo: "Caixa de Ferramentas DevOps", autor: "Casa do Código", arquivo: "Livros/Caixa de Ferramentas DevOps - U - Autor (Casa do Codigo).pdf" },
    { titulo: "O Canivete Suíço do Desenvolvedor Node", autor: "Casa do Código", arquivo: "Livros/Canivete suico do desenvolvedor - Autor (Casa do Codigo).pdf" },
    { titulo: "Clean Agile", autor: "Robert C. Martin", arquivo: "Livros/Clean Agile - Back to Basics - Autor (Robert Martin).pdf" },
    { titulo: "Código Limpo", autor: "Robert C. Martin", arquivo: "Livros/Codigo Limpo.pdf" },
    { titulo: "Começando com o Linux", autor: "Casa do Código", arquivo: "Livros/Comecando com o Linux - Comando - Autor (Casa do Codigo).pdf" },
    { titulo: "Como Mentir com Estatística", autor: "Darrell Heff", arquivo: "Livros/Como mentir com estatistica - Darrell Heff.pdf" },
    { titulo: "Como Quebrar Códigos", autor: "Anonymous", arquivo: "Livros/Como quebrar Codigos - anonymous.pdf" },
    { titulo: "Como ser um Programador Melhor", autor: "Pete Goodliffe", arquivo: "Livros/Como ser um programador melhor - Pete Goodliffe.pdf" },
    { titulo: "Comunicação de Dados e Redes de Computadores", autor: "Behrouz Forouzan", arquivo: "Livros/Comunicacao de Dados e Redes de - Behrouz A. Forouzan.pdf" },
    { titulo: "Conceitos de Linguagens de Programação 9° Edição", autor: "Robert Sebesta", arquivo: "Livros/Conceitos de Linguagens de Prog - Robert W. Sebesta.pdf" },
    { titulo: "Construindo API REST com Node.js", autor: "Casa do Código", arquivo: "Livros/Construindo API REST com Node J - Autor (Casa do Codigo).pdf" },
    { titulo: "Controlando Versões com Git e GitHub", autor: "Casa do Código", arquivo: "Livros/Controlando Versoes com Git e G - Autor (Casa do Codigo).pdf" },
    { titulo: "Cracking the Coding Interview", autor: "Gayle McDowell", arquivo: "Livros/Cracking the Coding Interview, - Gayle Laakmann McDowell.pdf" },
    { titulo: "CSS Eficiente", autor: "Casa do Código", arquivo: "Livros/CSS Eficiente - Tecnicas e ferr - Autor (Casa do Codigo).pdf" },
    { titulo: "Desconstruindo a Web", autor: "Willian Molinari", arquivo: "Livros/Desconstruindo a web_ As tecnol - Willian Molinari.pdf" },
    { titulo: "Desenvolvimento de Games", autor: "Jeannie Novak", arquivo: "Livros/Desenvolvimento de Games - Jeannie Novak.pdf" },
    { titulo: "DevOps na Prática", autor: "Casa do Código", arquivo: "Livros/DevOps na Pratica - Entrega de - Autor (Casa do Codigo).pdf" },
    { titulo: "DevOps nativo de nuvem com Kubernetes", autor: "John Arundel", arquivo: "Livros/DevOps nativo de nuvem com Kube - John Arundel.pdf" },
    { titulo: "Direto ao Ponto: Criando produtos de forma enxuta", autor: "Casa do Código", arquivo: "Livros/Direto ao Ponto - Criando produ - Autor (Casa do Codigo).pdf" },
    { titulo: "Domain-Driven Design Quickly", autor: "Eric Evans", arquivo: "Livros/Domain Driven Design Rapido - Autor (Eric Evans).pdf" },
    { titulo: "DSL: Quebre a barreira entre desenvolvimento e negócios", autor: "Casa do Código", arquivo: "Livros/DSL - Quebre a barreira entre d - Autor (Casa do Codigo).pdf" },
    { titulo: "Eletrônica básica para o Arduino", autor: "Paulo Mazzei", arquivo: "Livros/Eletronica Basica para o Arduin - Paulo Edson Mazzei.pdf" },
    { titulo: "Engenharia de Software", autor: "Ian Sommerville", arquivo: "Livros/Engenharia de software - Ian Sommerville.pdf" },
    { titulo: "Engenharia de Software para Ciêntistas de Dados", autor: "Uninter", arquivo: "Livros/Engenharia de Software para Cie - Desconhecido.pdf" },
    { titulo: "Entendendo Algoritmos", autor: "Aditya Bhargava", arquivo: "Livros/Entendendo Algoritmos_ Um guia ilustrado paores e outros curiosos - Aditya Y. Bhargava.pdf" },
    { titulo: "Entrega Contínua em Android", autor: "Roger Silva", arquivo: "Livros/Entrega continua em Android_ Co - Roger Silva.pdf" },
    { titulo: "Estatística: O que é, para que serve e como funciona", autor: "Charles Wheelan", arquivo: "Livros/Estatistica O que e, para que s - Desconhecido.pdf" },
    { titulo: "Excel VBA e Macros", autor: "Luiz Felipe Araújo", arquivo: "Livros/Excel VBA e Macros_ Passo a Pas - Luiz Felipe Araujo.pdf" },
    { titulo: "Expressões Regulares uma abordagem divertida", autor: "Aurélio Marinho", arquivo: "Livros/Expressoes Regulares - uma abor - Autor (Aurelio Marinho).pdf" },
    { titulo: "eXtreme Programming", autor: "Casa do Código", arquivo: "Livros/eXtreme Programming - Praticas - Autor (Casa do Codigo).pdf" },
    { titulo: "Fragmentos de um Programador", autor: "Casa do Código", arquivo: "Livros/Fragmentos de um programador - - Autor (Casa do Codigo).pdf" },
    { titulo: "Fundamentals of Data Engineering", autor: "Joe Reis", arquivo: "Livros/Fundamentos de Engenharia de Da - Desconhecido.pdf" },
    { titulo: "Gestão de Produtos", autor: "Casa do Código", arquivo: "Livros/Gestao de produtos - Como aumen - Autor (Casa do Codigo).pdf" },
    { titulo: "Google Android", autor: "Casa do Código", arquivo: "Livros/Google Android - crie aplicacoe - Autor (Casa do Codigo).pdf" },
    { titulo: "Guia da Startup", autor: "Casa do Código", arquivo: "Livros/Guia da Startup - Como Startups - Autor (Casa do Codigo).pdf" },
    { titulo: "Guia do Mestre Programador", autor: "Carlos Bueno", arquivo: "Livros/Guia do Mestre Programador - Carlos Bueno.pdf" },
    { titulo: "Guia Prático de TypeScript", autor: "Casa do Código", arquivo: "Livros/Guia pratico de TypeScript - Me - Autor (Casa do Codigo).pdf" },
    { titulo: "Guia Prático do Servidor Linux", autor: "Casa do Código", arquivo: "Livros/Guia pratico do servidor Linux - Autor (Casa do Codigo).pdf" },
    { titulo: "Head First C", autor: "David Griffiths", arquivo: "Livros/Head First C David Griffiths, D - Desconhecido.pdf" },
    { titulo: "HTML5 e CSS3", autor: "Casa do Código", arquivo: "Livros/HTML5 e CSS3 - domine a web do - Autor (Casa do Codigo).pdf" },
    { titulo: "Introdução à Arquitetura e Design de Software", autor: "Paulo Silveira", arquivo: "Livros/Introducao a arquitetura de des - Autor (Paulo Silveira).pdf" },
    { titulo: "Introdução a Data Science", autor: "Tatiana Escovedo", arquivo: "Livros/Introducao a Data Science_ Algo - Tatiana Escovedo.pdf" },
    { titulo: "Introdução e Boas Práticas em UX Design", autor: "Casa do Código", arquivo: "Livros/Introducao e boas praticas em U - Autor (Casa do Codigo).pdf" },
    { titulo: "Java: Como Programar", autor: "Deitel & Deitel", arquivo: "Livros/Java Como programar - Paul Deitel , Harvey Deitel.pdf" },
    { titulo: "JavaScript de Alto Desempenho", autor: "Nicholas Zakas", arquivo: "Livros/JavaScript de Alto Desempenho - Nicholas C. Zakas.pdf" },
    { titulo: "JavaScript: O Guia Definitivo", autor: "David Flanagan", arquivo: "Livros/JavaScript O Guia Definitivo v - Desconhecido.pdf" },
    { titulo: "Jenkins: Automatize Tudo Sem Complicações", autor: "Fernando Boaglio", arquivo: "Livros/Jenkins_ Automatize tudo sem co - Fernando Boaglio.pdf" },
    { titulo: "Kubernetes: Tudo sobre orquestração de containers", autor: "Casa do Código", arquivo: "Livros/Kubernetes - Tudo sobre orquest - Autor (Casa do Codigo).pdf" },
    { titulo: "Lean Enterprise: Como empresas de alta performance inovam em escala", autor: "Jez Humble", arquivo: "Livros/Lean Enterprise - Jez Humble, Joanne Molesky.pdf" },
    { titulo: "Learning 3.0", autor: "Casa do Código", arquivo: "Livros/Learning 3.0 - Como os profissi - Autor (Casa do Codigo).pdf" },
    { titulo: "Linguagens de Programação", autor: "Laércio Metzner", arquivo: "Livros/Linguagens de Programacao - Laercio Metzner.pdf" },
    { titulo: "Linux: A Bíblia", autor: "Christopher Negus", arquivo: "Livros/Linux - A Biblia, Traducao da 8 - Christopher Negus com a colabor.pdf" },
    { titulo: "Lógica de programação e estruturas de dados", autor: "Anonymous", arquivo: "Livros/Logica de Programacao e Estrutu - anonymous.pdf" },
    { titulo: "Microsoft Word: Containers com Docker", autor: "Fabyo", arquivo: "Livros/Microsoft Word - containers-com - Fabyo.pdf"},
    { titulo: "Managing For Happiness", autor: "Jurgen Appelo", arquivo: "Livros/Managing For Happiness - Jurgen Appelo.pdf" },
    { titulo: "Métricas Ágeis", autor: "Casa do Código", arquivo: "Livros/Metricas ageis - Obtenha melhor - Autor (Casa do Codigo).pdf" },
    { titulo: "MongoDB", autor: "Casa do Código", arquivo: "Livros/MongoDB - Construa Novas Aplica - Autor (Casa do Codigo).pdf" },
    { titulo: "More Agile Testing", autor: "Janet Gregory", arquivo: "Livros/More Agile Testing_ Learning Jo - Janet Gregory.pdf" },
    { titulo: "NoSQL", autor: "David Paniz", arquivo: "Livros/NoSQL_ Como armazenar os dados - David Paniz.pdf" },
    { titulo: "O Ego é seu Inimigo", autor: "Ryan Holiday", arquivo: "Livros/O ego e seu inimigo - Ryan Holiday.pdf" },
    { titulo: "O Programador Apaixonado", autor: "Chad Fowler", arquivo: "Livros/O Programador Apaixonado - Cons - Autor (Casa do Codigo).pdf" },
    { titulo: "O Programador Pragmático", autor: "Hunt & Thomas", arquivo: "Livros/O programador pragmatico de apr - Andrew Hunt; David Thomas.pdf" },
    { titulo: "OAuth 2.0", autor: "Casa do Código", arquivo: "Livros/Oauth 2.0 Proteja Suas Aplicaco - Autor (Casa do Codigo).pdf" },
    { titulo: "Pense em Python", autor: "Allen Downey", arquivo: "Livros/Pense em Python - Terceira Edic - Allen B. Downey.pdf" },
    { titulo: "Por que Generalistas Vencem em um Mundo de Especialistas", autor: "David Epstein", arquivo: "Livros/Por que os generalistas vencem - David Epstein.pdf" },
    { titulo: "Pré-Cálculo para Leigos", autor: "Marcos Lima", arquivo: "Livros/Pre-Calculo - Marcos Lima.pdf" },
    { titulo: "Pré-Cálculo: Schaum 2° Edição", autor: "Fred Safier", arquivo: "Livros/Pre-Calculo_ Colecao Schaum - Fred Safier.pdf" },
    { titulo: "Princípios de Design e Padrões de Projetos", autor: "Robert C. Martin", arquivo: "Livros/Principios de Design e Padroes - Autor (Robert C. Martin).pdf" },
    { titulo: "Programação com Arduino", autor: "Simon Monk", arquivo: "Livros/Programacao com ARDUINO - Simon Monk.pdf" },
    { titulo: "Programação de Rede Unix", autor: "Richard Stevens", arquivo: "Livros/Programacao de Rede Unix - Api - Stevens, W. Richard; Fenner, Bi.pdf" },
    { titulo: "Programação Orientada a Objetos", autor: "Cristiano Franco", arquivo: "Livros/Programacao Orientada a Objetos - Cristiano Roberto Franco.pdf" },
    { titulo: "Programação para Web", autor: "Cristiano Franco", arquivo: "Livros/Programacao para Web - Cristiano Roberto Franco.pdf" },
    { titulo: "Progressive Web Apps (PWA)", autor: "Casa do Código", arquivo: "Livros/Progressive web apps - Construa - Autor (Casa do Codigo).pdf" },
    { titulo: "Python e R: Para o cientista de dados moderno", autor: "Rick Scavetta", arquivo: "Livros/Python e R para o Cientista de - Rick J. Scavetta.pdf" },
    { titulo: "Python: Primeiros Passos", autor: "Uninter", arquivo: "Livros/Python Escreva seus primeiros p - Desconhecido.pdf" },
    { titulo: "Real-World Kanban", autor: "Mattias Skarin", arquivo: "Livros/Real-World Kanban - Mattias Skarin.pdf" },
    { titulo: "Redes de Computadores e a Internet", autor: "James Kurose", arquivo: "Livros/Redes de computadores e a Inter - James F. Kurose.pdf" },
    { titulo: "Refatoração", autor: "Martin Fowler", arquivo: "Livros/Refatoracao - Fowler, Martin.pdf" },
    { titulo: "REST: APIs Inteligentes de maneiras simples", autor: "Casa do Código", arquivo: "Livros/REST - Construa API's inteligen - Autor (Casa do Codigo).pdf" },
    { titulo: "Scrum: Gestão Ágil para Projetos de Sucesso", autor: "Casa do Código", arquivo: "Livros/Scrum - Gestao agil para projet - Autor (Casa do Codigo).pdf" },
    { titulo: "Scrum 360", autor: "Casa do Código", arquivo: "Livros/Scrum 360 - Um guia completo e - Autor (Casa do Codigo).pdf" },
    { titulo: "Secrets of a Buccaneer-Scholar", autor: "James Bach", arquivo: "Livros/Secrets of a buccaneer-scholar - Bach, James.pdf" },
    { titulo: "SEO Prático", autor: "Casa do Código", arquivo: "Livros/SEO Pratico - Seu Site na Prime - Autor (Casa do Codigo).pdf" },
    { titulo: "Sistemas Digitais Fudamentos e Aplicações 9° Edição", autor: "Thomas Floyd", arquivo: "Livros/Sistemas Digitais_ Fundamentos - Thomas Floyd.pdf" },
    { titulo: "Sistemas e Aplicações Distribuídas", autor: "Carlos Rocha", arquivo: "Livros/Sistemas e Aplicacoes Distribui - Carlos Andre de Sousa Rocha , M.pdf" },
    { titulo: "Sistemas Operacionais: Projeto e Implementação", autor: "Andrew Tanenbaum", arquivo: "Livros/Sistemas Operacionais - Projeto - Tanenbaum, Andrew S_.pdf" },
    { titulo: "Sistemas Operacionais Modernos", autor: "Andrew Tanenbaum", arquivo: "Livros/Sistemas Operacionais Modernos - Andrew S Tanenbaum.pdf" },
    { titulo: "SOA Aplicado", autor: "Casa do Código", arquivo: "Livros/SOA Aplicado - Integrando com w - Autor (Casa do Codigo).pdf" },
    { titulo: "Soft Skills: Dev's Life", autor: "John Sonmez", arquivo: "Livros/Soft Skills - The Software Deve - Autor (John Sonmez).pdf" },
    { titulo: "Soft Skills: Competências essenciais para os novos tempos", autor: "Beatriz Montenegro", arquivo: "Livros/Soft skills kids_ como desenvol - Beatriz Montenegro.pdf" },
    { titulo: "Sprint", autor: "Jake Knapp", arquivo: "Livros/Sprint - Jake Knapp.pdf" },
    { titulo: "SQL: Guia Prático", autor: "Alice Zhao", arquivo: "Livros/SQL Guia Pratico (Alice Zhao) ( - Desconhecido.pdf" },
    { titulo: "SQL para Análise de Dados", autor: "Cathy Tanimura", arquivo: "Livros/SQL para Analise de Dados (Cath - Desconhecido.pdf" },
    { titulo: "TDD: Desenvolvimento Guiado por Testes", autor: "Kent Beck", arquivo: "Livros/TDD Desenvolvimento Guiado por - Kent Beck.pdf" },
    { titulo: "Test-Driven Development", autor: "Casa do Código", arquivo: "Livros/Test-Driven Development - Teste - Autor (Casa do Codigo).pdf" },
    { titulo: "Testes Automatizados de Software", autor: "Casa do Código", arquivo: "Livros/Testes Automatizados de Softwar - Autor (Casa do Codigo).pdf" },
    { titulo: "The Cambridge Handbook of The Learning Sciences", autor: "Keith Sawyer", arquivo: "Livros/The Cambridge Handbook of the L - R. Keith Sawyer.pdf" },
    { titulo: "The Clean Coder", autor: "Robert C. Martin", arquivo: "Livros/The Clean Coder_ A Code of Cond - Robert C. Martin.pdf" },
    { titulo: "The Software Craftsman", autor: "Sandro Mancuso", arquivo: "Livros/The Software Craftsman_ Profess - Sandro Mancuso.pdf" },
    { titulo: "Trabalho Eficaz Com Código Legado", autor: "Michael Feathers", arquivo: "Livros/Trabalho Eficaz com Codigo Lega - Michael C. Feathers.pdf" },
    { titulo: "Use a Cabeça! Python", autor: "Paul Barry", arquivo: "Livros/Use a cabeca Python - 3a Edicao - Paul Barry.pdf" },
    { titulo: "Use a Cabeça! SQL", autor: "Lynn Beighley", arquivo: "Livros/Use a Cabeca SQL Lynn Beighley - Desconhecido.pdf" },
    { titulo: "UX e Usabilidade Aplicados em Mobile e Web", autor: "Caelum", arquivo: "Livros/UX e Usabilidade aplicados em M - Caelum.pdf" },
    { titulo: "VBA Excel para Leigos", autor: "John Walkenbach", arquivo: "Livros/VBA Excel.indd - WALKENBACH , JOHN.pdf" },
    { titulo: "Web Design Responsivo", autor: "Casa do Código", arquivo: "Livros/Web Design Responsivo - Paginas - Autor (Casa do Codigo).pdf" }
];

// O RESTANTE DO SEU CÓDIGO (Função de busca, renderização, etc.) CONTINUA ABAIXO...
const estante = document.getElementById('estante');
const campoBusca = document.getElementById('campoBusca');

function mostrarLivros(lista) {
    estante.innerHTML = ""; 
    lista.forEach(livro => {
        const cartao = document.createElement('div');
        cartao.classList.add('livro-item');
        
        const nomeArquivoSomente = livro.arquivo.replace("Livros/", "").replace(".pdf", "");
        const capaUrl = `Capas/${encodeURIComponent(nomeArquivoSomente)}.jpg`;

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
//Sapo9841 🐸
