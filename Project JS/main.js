const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    if (!validaNome(nomeBeneficiario.value)) {

    }
})

console.log(form);