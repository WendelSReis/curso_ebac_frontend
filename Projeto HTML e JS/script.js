const form = document.getElementById('myForm');
const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');
const messageContainer = document.getElementById('messageContainer');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numberA = parseInt(inputA.value);
    const numberB = parseInt(inputB.value);

    if (numberB > numberA) {
        showMessage('Formulário válido!', 'positive');
    } else {
        showMessage('Formulário inválido!', 'negative');
    }
});

function showMessage(message, className) {
    messageContainer.textContent = message;
    messageContainer.className = `message ${className}`;
}