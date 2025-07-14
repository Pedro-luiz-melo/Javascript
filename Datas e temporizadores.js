<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Contagem Regressiva</title>
  <style>
    #temporizador {
      font-size: 24px;
      font-family: Arial, sans-serif;
      margin-top: 20px;
    }
  </style>
</head>
<body>

<h2>Contagem Regressiva para a Data Futura</h2>
<div id="temporizador"></div>

<script>
  // 1. Função para calcular o tempo restante
  function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const diferenca = dataFutura - agora;

    if (diferenca <= 0) {
      return null; // já passou
    }

    const segundosTotal = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotal / (60 * 60 * 24));
    const horas = Math.floor((segundosTotal % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((segundosTotal % (60 * 60)) / 60);
    const segundos = segundosTotal % 60;

    return { dias, horas, minutos, segundos };
  }

  // 2. Função para atualizar o temporizador na tela
  function atualizarTemporizador() {
    const tempo = calcularTempoRestante(dataFutura);

    const elemento = document.getElementById("temporizador");

    if (!tempo) {
      elemento.textContent = "Tempo esgotado!";
      clearInterval(intervalId);
      return;
    }

    elemento.textContent =
      `${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`;
  }

  // 3. Definindo a data futura (exemplo: 25 de dezembro de 2025 às 00:00)
  const dataFutura = new Date("2025-12-25T00:00:00");

  // 4. Atualiza o temporizador a cada segundo
  atualizarTemporizador(); // chama imediatamente
  const intervalId = setInterval(atualizarTemporizador, 1000);
</script>

</body>
</html>

