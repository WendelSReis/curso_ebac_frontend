const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(inputNotaAtividade.value);

    let linha = '<tr>';
    linha += `<tr>${inputNomeAtividade.value}</tr>`;
    linha += `<tr>${inputNotaAtividade.value}</tr>`;
    linha += `<tr>${inputNotaAtividade >= 7 ? imgAprovado : imgReprovado}</tr>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}