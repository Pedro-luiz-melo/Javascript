<!DOCTYPE
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Lista de Tarefas</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
    }

    input[type="text"] {
      padding: 8px;
      font-size: 16px;
      width: 300px;
    }

    button {
      padding: 8px 16px;
      font-size: 16px;
      margin-left: 10px;
      cursor: pointer;
    }

    .tarefa {
      margin: 10px 0;
      font-size: 18px;
    }

    .concluida {
      text-decoration: line-through;
      color: gray;
    }

    label {
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h2>Lista de Tarefas</h2>

  <input type="text" id="descricao" placeholder="Digite uma nova tarefa">
  <button onclick="adicionarTarefa()">Adicionar</button>

  <div id="listaTarefas"></div>

  <script>
    const tarefas = [];

    function adicionarTarefa() {
      const input = document.getElementById('descricao');
      const descricao = input.value.trim();

      if (descricao === '') return;

      tarefas.push({ descricao, status: false });
      input.value = '';
      atualizarLista();
    }

    function alternarStatus(index) {
      tarefas[index].status = !tarefas[index].status;
      atualizarLista();
    }

    function atualizarLista() {
      const container = document.getElementById('listaTarefas');
      container.innerHTML = '';

      tarefas.forEach((tarefa, index) => {
        const div = document.createElement('div');
        div.className = 'tarefa';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.onchange = () => alternarStatus(index);

        const label = document.createElement('label');
        label.className = tarefa.status ? 'concluida' : '';
        label.textContent = tarefa.descricao;
        label.style.marginLeft = '10px';

        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
      });
    }
  </script>

</body>
</html>
