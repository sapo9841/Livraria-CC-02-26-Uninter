# 📚 Biblioteca Digital - Ciência da Computação (Uninter)
Este projeto é uma biblioteca digital interativa desenvolvida para organizar e facilitar o acesso aos materiais de estudo da turma de Ciência da Computação 02/26.

## 🚀 Funcionalidades
- **Estante Dinâmica:** Renderização de livros via JavaScript, com capa, título e autor.
- **Busca em tempo real:** Filtro instantâneo por título, autor ou categoria. Ignora acentos e maiúsculas ("programacao" encontra "Programação") e aceita mais de uma palavra.
- **Categorias:** Filtro por área (Ágil e Gestão, DevOps e Cloud, Web e Mobile, etc.), com contador de livros.
- **Ordenação:** Por título (A-Z ou Z-A) ou por autor.
- **Links compartilháveis:** A busca, a categoria e a ordem ficam no endereço (ex.: `?q=docker&cat=DevOps%20e%20Cloud`).
- **Interface Dark Mode:** Design focado em usabilidade e conforto visual.
- **Responsividade e acessibilidade:** Ajuste automático para diferentes telas, navegação por teclado e textos alternativos nas capas.

## 📂 Estrutura
- `index.html`: estrutura da página.
- `style.css`: estilos.
- `script.js`: busca, filtros, ordenação e renderização.
- `livros.js`: **lista de livros** (é o único arquivo que você precisa editar para adicionar material).
- `Livros/`: arquivos PDF.
- `Capas/`: imagens de capa (`.jpg`).

## ➕ Como adicionar novos livros
1. Adicione o arquivo PDF na pasta `/Livros`.
2. Adicione a capa em formato `.jpg` na pasta `/Capas`, **com o mesmo nome do PDF** (sem a extensão `.pdf`). Se não houver capa, o site mostra uma imagem reserva.
3. Inclua uma linha no array `livros` do arquivo `livros.js`:

```js
{ titulo: "Nome do Livro", autor: "Nome do Autor", categoria: "Programação", arquivo: "Livros/nome do arquivo.pdf" },
```

As categorias são criadas automaticamente a partir do campo `categoria`, então basta repetir o nome de uma categoria existente (ou criar uma nova).

## 🔄 Depois de qualquer mudança no site
O GitHub Pages faz o navegador guardar os arquivos por alguns minutos, então quem já abriu o site pode continuar vendo a versão antiga. Para evitar isso, rode o script abaixo **antes de fazer o commit**:

```bash
./atualizar-versao.sh
```

Ele troca o número de versão (`?v=...`) dos arquivos no `index.html`, e o navegador passa a baixar a versão nova na hora. Se não puder rodar o script, basta trocar o número à mão nas três linhas do `index.html` que terminam em `?v=`.

---
Feito com ❤️ por Sapo9841.
