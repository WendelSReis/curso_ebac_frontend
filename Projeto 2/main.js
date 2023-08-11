const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<tr>${inputNomeAtividade.value}</tr>`;
    linha += `<tr>${inputNotaAtividade.value}</tr>`;
    linha += `<tr>${inputNotaAtividade >= 7 ? 'Aprovado' : 'Reprovado'}</tr>`;
    linha += '</tr>'

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;
});