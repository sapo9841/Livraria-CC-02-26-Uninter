# 📚 Biblioteca Digital - Ciência da Computação (Uninter)
Este projeto é uma biblioteca digital interativa desenvolvida para organizar e facilitar o acesso aos materiais de estudo da turma de Ciência da Computação 02/26.

## 🚀 Funcionalidades
- **Estante Dinâmica:** Renderização de livros via JavaScript.
- **Barra de Busca Real-time:** Filtro instantâneo por título ou autor.
- **Interface Dark Mode:** Design focado em usabilidade e conforto visual.
- **Responsividade:** Ajuste automático para diferentes tamanhos de tela.

## 📂 Como adicionar novos livros
1. Adicione o arquivo PDF na pasta `/Livros`.
2. Adicione a capa em formato `.jpg` na pasta `/Capas` (com o mesmo nome do PDF).
3. Insira os dados do livro no array `livros` dentro do arquivo `script.js`.

---
Feito com ❤️ por Sapo9841.

----

## Atualizações

### **drakomichael** 11/03/2026 (responsividade e otimização)
### CSS
- Adicionada a pasta `/Livros` ao `.gitignore`, impedindo versionamento acidental dos PDFs da turma (pra não baixar os 1gb de livros quando for desenvolver).
- Padronização de cores, bordas e limites com variáveis CSS em `:root`, facilitando manutenção e ajustes futuros.
- Criação de limite de conteúdo com largura fluida em `.container` para melhor aproveitamento de espaço em telas grandes e pequenas.
- Ajuste do `header` com espaçamentos e tipografia fluidos usando `clamp()`, evitando títulos desproporcionais.
- Busca (`.busca-container` e `#campoBusca`) com largura e fonte responsivas para melhor leitura no mobile.
- Grid da estante (`.grade-livros`) atualizado para `auto-fit` + `minmax(...)` responsivo, melhorando o encaixe automático dos cards.
- Espaçamentos do grid e cards convertidos para valores fluidos (`clamp()`), reduzindo quebras visuais entre resoluções.
- Cards (`.livro-item`) com padding responsivo e bordas padronizadas para consistência visual.
- Título dos livros (`.livro-item h3`) com tamanho de fonte fluido para preservar legibilidade em diferentes densidades de tela.
- Media query intermediária para tablet (`max-width: 768px`) e fallback móvel (`max-width: 480px`) com grade em 2 colunas.
- Centralização e acabamento do rodapé para melhor composição em layouts curtos ou longos.
### JavaScript (organização e automação)
- Carregamento dos PDFs diretamente da pasta `/Livros` via `fetch`, com extração automática dos nomes dos arquivos (agora é só adicionar os PDF's na pasta que aparece automaticamente).
- Implementado sistema de ordenação alfabética com seletor de ordem (`A-Z` e `Z-A`), integrado ao filtro de busca.
- Refatoração da lógica de renderização para aplicar busca + ordenação em conjunto, com atualização em tempo real.
- Remoção da lista estática em `const livros`, reduzindo manutenção manual do catálogo.
- Geração automática de título e autor a partir do nome do arquivo, mantendo consistência mínima mesmo sem cadastro manual.
- Tratamento de erro amigável quando o servidor não permite listagem de diretório, exibindo mensagem orientativa na interface.
- Adicionar de um placeholder automático pra quando não for encontrada a capa do livro (essa extração de imagem pode ser automatizada e melhorada, tirando a necessidade da pasta `/Capas`)
