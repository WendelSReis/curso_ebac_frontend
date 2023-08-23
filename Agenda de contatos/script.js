document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');
    const tabelaContatos = document.getElementById('contatos');
    const cadastrarBtn = document.getElementById('cadastrar');

    cadastrarBtn.addEventListener('click', function() {
        const nomeInput = document.getElementById('nome');
        const telefoneInput = document.getElementById('telefone');

        const nome = nomeInput.value;
        const telefone = telefoneInput.value;

    });
});