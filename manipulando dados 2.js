<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Lista de Tarefas</title>
  <style>
    .concluida {
      text-decoration: line-through;
      color: gray;
    }

    .tarefa {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 8px;
    }

    button.excluir {
      background-color: red;
      color: white;
      border: none;
      padding: 4px 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Minha Lista de Tarefas</h2>

  <input type="text" id="descricaoInput" placeholder="Descrição da tarefa">
  <button onclick="adicionarTarefa()">Adicionar</button>

  <div id="listaTarefas"></div>

  <script>
    // Recupera tarefas do localStorage ou inicializa lista vazia
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    function salvarTarefas() {
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    function renderizarTarefas() {
      const lista = document.getElementById("listaTarefas");
      lista.innerHTML = "";

      tarefas.forEach((tarefa, index) => {
        const div = document.createElement("div");
        div.className = "tarefa";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.onchange = () => {
          tarefa.status = checkbox.checked;
          salvarTarefas();
          renderizarTarefas();
        };

        const span = document.createElement("span");
        span.textContent = tarefa.descricao;
        span.className = tarefa.status ? "concluida" : "";

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.className = "excluir";
        botaoExcluir.onclick = () => {
          tarefas.splice(index, 1);
          salvarTarefas();
          renderizarTarefas();
        };

        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(botaoExcluir);

        lista.appendChild(div);
      });
    }

    function adicionarTarefa() {
      const input = document.getElementById("descricaoInput");
      const descricao = input.value.trim();

      if (descricao) {
        tarefas.push({ descricao: descricao, status: false });
        salvarTarefas();
        renderizarTarefas();
        input.value = "";
      }
    }

    // Renderiza tarefas ao carregar a página
    renderizarTarefas();
  </script>
</body>
</html>
