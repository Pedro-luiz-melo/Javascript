<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Curtir</title>
</head>
<body>
  <h2>Quem curtiu?</h2>
  
  <input type="text" id="nomeInput" placeholder="Digite seu nome">
  <button onclick="curtir()">Curtir</button>
  <button onclick="limpar()">Limpar</button>
  
  <p id="resultado">Ninguém curtiu</p>

  <script>
    // Recupera lista do localStorage ou inicializa vazia
    let pessoas = JSON.parse(localStorage.getItem("curtidas")) || [];

    function atualizarMensagem() {
      const resultado = document.getElementById("resultado");
      const qtd = pessoas.length;

      if (qtd === 0) {
        resultado.textContent = "Ninguém curtiu";
      } else if (qtd === 1) {
        resultado.textContent = `${pessoas[0]} curtiu`;
      } else if (qtd === 2) {
        resultado.textContent = `${pessoas[0]} e ${pessoas[1]} curtiram`;
      } else {
        resultado.textContent = `${pessoas[0]}, ${pessoas[1]} e mais ${qtd - 2} pessoas curtiram`;
      }
    }

    function curtir() {
      const nomeInput = document.getElementById("nomeInput");
      const nome = nomeInput.value.trim();

      if (nome && !pessoas.includes(nome)) {
        pessoas.push(nome);
        localStorage.setItem("curtidas", JSON.stringify(pessoas));
        atualizarMensagem();
      }

      nomeInput.value = ""; // Limpa o campo
    }

    function limpar() {
      pessoas = [];
      localStorage.removeItem("curtidas");
      atualizarMensagem();
    }

    // Atualiza a mensagem ao carregar a página
    atualizarMensagem();
  </script>
</body>
</html>
