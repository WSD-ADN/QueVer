const form = document.querySelector('form');
const errorMessage = document.querySelector('#error-message');
const nameInput = document.getElementById('name');


nameInput.value = '';function mostrarImagen() {
  const enviado = document.querySelector(".enviado");
  enviado.classList.add("mostrar");
  setTimeout(function() {
    enviado.classList.remove("mostrar");
  }, 3000);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const input = document.querySelector('#name');
  if (!input.value) {
    errorMessage.textContent = 'Este campo es requerido';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    mostrarImagen();
  }
  
  nameInput.value = '';

});
