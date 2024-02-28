const form = document.getElementById('form-tarefas');
const tarefas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaTarefa();
    atualizaLinha ();
})

function adicionaTarefa() {

    const inputTarefa = document.getElementById('nome-tarefa');

    if (tarefas.includes(inputTarefa.value)) {
        alert (`Você já criou a tarefa "${inputTarefa.value}".`)
    
    }else {
        tarefas.push(inputTarefa.value);

        let linha = '<ul>'
        linha += `<li>${inputTarefa.value}</li>`;
        linha += `</ul>`;

        linhas += linha;
    }

    inputTarefa.value = '';
}

function atualizaLinha () {

    const atualizaLista = document.querySelector('ul');
    atualizaLista.innerHTML = linhas;

} 

        // Aplica o efeito de riscar o texto ao clicar nos itens da lista
    $(document).ready(function() {

      $('ul').on('click', 'li', function() {

        $(this).css('text-decoration', 'line-through');

      });

    });


