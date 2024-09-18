const formulario = document.getElementById('meu-formulario');
const mensagemDiv = document.getElementById('mensagem');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(document.getElementById('campoA').value);
    const valorB = parseFloat(document.getElementById('campoB').value);

    if (valorB > valorA) {
        mensagemDiv.innerHTML = '<p>Formulário válido! B é maior que A.</p>';
        mensagemDiv.style.color = 'green';
    } else {
        mensagemDiv.innerHTML = '<p>Formulário inválido! B deve ser maior que A.</p>';
        mensagemDiv.style.color = 'red';
    }
});
