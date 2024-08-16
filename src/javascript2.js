const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

const btnEntrar = document.querySelector('button[type="submit"]');

btnEntrar.addEventListener('click', function(event) {
  event.preventDefault(); // Evita o envio do formulário
  window.location.href = 'inicio.html'; // Abre outro HTML
});
