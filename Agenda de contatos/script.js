document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');
    const tabelaContatos = document.getElementById('contatos');
    const cadastrarBtn = document.getElementById('cadastrar');

    cadastrarBtn.addEventListener('click', function() {
        const nomeInput = document.getElementById('nome');
        const telefoneInput = document.getElementById('telefone');

        const nome = nomeInput.value;
        const telefone = telefoneInput.value;

        if (nome && telefone) {
            const newRow = tabelaContatos.insertRow();
            const cellNome = newRow.insertCell(0);
            const cellTelefone = newRow.insertCell(1);

            cellNome.textContent = nome;
            cellTelefone.textContent = telefone;

            nomeInput.value = '';
            telefoneInput.value = '';
        }
    });
});