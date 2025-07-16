<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Curtir</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
    }
    input, button {
      padding: 8px;
      font-size: 16px;
    }
    p {
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h2>Quem curtiu?</h2>
  <input type="text" id="nome" placeholder="Digite seu nome">
  <button onclick="curtir()">Curtir</button>

  <p id="resultado">Ninguém curtiu</p>

  <script>
    const curtidores = [];

    function curtir() {
      const input = document.getElementById('nome');
      const nome = input.value.trim();
      if (nome === '' || curtidores.includes(nome)) {
        input.value = '';
        return; // ignora nomes vazios ou duplicados
      }

      curtidores.push(nome);
      atualizarTexto();
      input.value = '';
    }

    function atualizarTexto() {
      const p = document.getElementById('resultado');
      const n = curtidores.length;

      if (n === 0) {
        p.textContent = "Ninguém curtiu";
      } else if (n === 1) {
        p.textContent = `${curtidores[0]} curtiu`;
      } else if (n === 2) {
        p.textContent = `${curtidores[0]} e ${curtidores[1]} curtiram`;
      } else {
        p.textContent = `${curtidores[0]}, ${curtidores[1]} e mais ${n - 2} pessoas curtiram`;
      }
    }
  </script>

</body>
</html>
