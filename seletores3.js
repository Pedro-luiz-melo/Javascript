<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de Seletores</title>
  <style>
    .paragrafo-destacado {
      background-color: #f0f0f0;
      padding: 5px;
      border-left: 4px solid #007BFF;
    }

    ul li {
      margin: 5px 0;
    }
  </style>
</head>
<body>

  <h1 id="titulo">Título original</h1>

  <ul id="minha-lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <p>Primeiro parágrafo</p>
  <p>Segundo parágrafo</p>
  <p>Terceiro parágrafo</p>

  <button id="meu-botao">Clique aqui</button>

  <script>
    // Mudar o texto do título
    document.querySelector('h1').textContent = 'Título atualizado via JavaScript';

    // Alterar o estilo dos itens da lista
    const itens = document.querySelectorAll('ul li');
    itens.forEach(item => {
      item.style.color = 'green';
      item.style.fontWeight = 'bold';
    });

    // Adicionar uma classe a todos os parágrafos
    const paragrafos = document.querySelectorAll('p');
    paragrafos.forEach(p => p.classList.add('paragrafo-destacado'));

    // Alterar o texto do botão
    document.querySelector('button').textContent = 'Texto Alterado!';
  </script>

</body>
</html>
