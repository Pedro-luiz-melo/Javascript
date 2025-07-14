// 1. Array de livros no estoque
const estoqueLivros = [];

// 2. Função para adicionar um livro
function adicionarLivro(titulo, autor, quantidade) {
  // Verifica se o livro já existe
  const existe = estoqueLivros.some(livro => livro.titulo === titulo);

  if (existe) {
    console.log(`O livro "${titulo}" já está no estoque.`);
  } else {
    estoqueLivros.push({ titulo, autor, quantidade });
    console.log(`Livro "${titulo}" adicionado com sucesso!`);
  }
}

// 3. Função para remover um livro pelo título
function removerLivro(titulo) {
  const index = estoqueLivros.findIndex(livro => livro.titulo === titulo);

  if (index !== -1) {
    estoqueLivros.splice(index, 1);
    console.log(`Livro "${titulo}" removido do estoque.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
}

// 4. Função para atualizar a quantidade de um livro
function atualizarQuantidade(titulo, novaQuantidade) {
  const livro = estoqueLivros.find(livro => livro.titulo === titulo);

  if (livro) {
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
}

// 5. Função para listar todos os livros no estoque
function listarLivros() {
  if (estoqueLivros.length === 0) {
    console.log("Estoque vazio.");
  } else {
    console.log("Livros no estoque:");
    for (const livro of estoqueLivros) {
      console.log(`- Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
    }
  }
}
