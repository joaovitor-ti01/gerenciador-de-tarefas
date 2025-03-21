// Array que vai armazenar as tarefas
let tarefas = [];

//Pegando os elementos do Dom
const inputTarefa = document.getElementById('novaTarefa');

const botaoAdicionar = document.getElementById('adicionarTarefa');

const listaDeTarefas = document.getElementById('listaDeTarefas');

//Função para adicionar uma nova tarefa ao array e atualizar a lista
function adicionarTarefa(){
    const tarefaTexto = inputTarefa.value.trim();

    if (tarefaTexto !== ""){
        tarefas.push(tarefaTexto); //Adicionar nova tarefa ao array 
        inputTarefa.value = ""; //Limpa o campo de input
        atualizarLista(); //Atualiza a exibição da lista de tarefas 
    } else {
        alert("Digite uma tarefa válida.");
    }
}

//Função para atualizar a lista de tarefas no HTML
function atualizarLista(){
    listaDeTarefas.innerHTML = ""; // Limpa a lista no HTML

    //Itera sobre o array de tarefas e cria um item de lista para cada uma 
    tarefas.forEach((tarefa, index) => {
        const item = document.createElement('li');
        item.textContent = tarefa;
    
        // Botão Remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerTarefa(index);

        item.appendChild(botaoRemover);
        listaDeTarefas.appendChild(item);
    });
}

//Função para remover uma tarefa pelo índice 
function removerTarefa(index) {
    tarefas.splice(index,1); //Remove a tarefa do array
    atualizarLista();  // Atualiza a exibição da lista de tarefas 
}

// Evento de clique no botão "Adicionar Tarefa"
botaoAdicionar.addEventListener('click', adicionarTarefa);