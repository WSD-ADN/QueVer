// // Selección del contenedor de puntos
// const puntosContainer = document.getElementById('puntos-container');

// // Función para generar un número aleatorio entre min y max
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Creación de 100 puntos
// for (let i = 0; i < 50; i++) {
//   // Creación de cada punto y asignación de clase
//   const punto = document.createElement('div');
//   punto.classList.add('punto');

//   // Generación de estilo aleatorio
//   const left = getRandomNumber(0, 100);
//   const top = getRandomNumber(0, 100);
//   const scale = getRandomNumber(3, 8) / 10;

//   // Aplicación de estilo al punto
//   punto.style.left = `${left}%`;
//   punto.style.top = `${top}%`;
//   punto.style.transform = `translate(-50%, -50%) scale(${scale})`;
//   punto.style.setProperty('--x', `${getRandomNumber(-150,700)}px`);
//   punto.style.setProperty('--y', `${getRandomNumber(-200,700)}px`);

//   // Añadir el punto al contenedor
//   puntosContainer.appendChild(punto);
// }

// Selección del contenedor de puntos
const puntosContainer = document.querySelector('.puntos-container');

// Función para generar un número aleatorio entre min y max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array con la ruta de las imágenes
const imagenes = [
  '../img/estrella.png',
  '../img/estrella2.png',

];

// Creación de 100 puntos con imágenes aleatorias
for (let i = 0; i < 40; i++) {
  // Creación de cada punto y asignación de clase
  const punto = document.createElement('div');
  punto.classList.add('punto');

  // Selección aleatoria de una imagen
  const imagen = imagenes[getRandomNumber(0, imagenes.length - 1)];

  // Generación de estilo aleatorio
  const left = getRandomNumber(0, 100);
  const top = getRandomNumber(0, 100);
  const scale = getRandomNumber(3, 8) / 10;

  // Aplicación de estilo al punto
  punto.style.left = `${left}%`;
  punto.style.top = `${top}%`;
  punto.style.transform = `translate(-50%, -50%) scale(${scale})`;
  punto.style.setProperty('--x', `${getRandomNumber(-1200, 1150)}px`);
  punto.style.setProperty('--y', `${getRandomNumber(-1150,1200)}px`);
  punto.style.backgroundImage = `url(${imagen})`;
  punto.style.backgroundSize = 'cover';
  punto.style.backgroundRepeat = 'no-repeat';
  punto.style.backgroundPosition = 'center';

  // Añadir el punto al contenedor
  puntosContainer.appendChild(punto);
}

document.addEventListener('DOMContentLoaded', () => {
  const imagenes = [
    {
      contenedor: document.querySelector('.imagen-container1'),
      imagen: document.querySelector('.imagen-1'),
      distanciaVentana: window.innerHeight * 0.8,
      distanciaDesdeArriba: 0
    },
    {
      contenedor: document.querySelector('.imagen-container1'),
      imagen: document.querySelector('.imagen-2'),
      distanciaVentana: window.innerHeight * 0.6,
      distanciaDesdeArriba: 0
    },
    {
      contenedor: document.querySelector('.imagen-container2'),
      imagen: document.querySelector('.imagen-3'),
      distanciaVentana: window.innerHeight * 0.8,
      distanciaDesdeArriba: 0
    },
    {
      contenedor: document.querySelector('.imagen-container2'),
      imagen: document.querySelector('.imagen-4'),
      distanciaVentana: window.innerHeight * 0.6,
      distanciaDesdeArriba: 0
    },
    {
      contenedor: document.querySelector('.imagen-container3'),
      imagen: document.querySelector('.imagen-5'),
      distanciaVentana: window.innerHeight * 0.8,
      distanciaDesdeArriba: 0
    },
    {
      contenedor: document.querySelector('.imagen-container3'),
      imagen: document.querySelector('.imagen-6'),
      distanciaVentana: window.innerHeight * 0.7,
      distanciaDesdeArriba: 0
    },
    {
      contenedor: document.querySelector('.imagen-container4'),
      imagen: document.querySelector('.imagen-7'),
      distanciaVentana: window.innerHeight * 0.7,
      distanciaDesdeArriba: 0
    }
  ];

  function actualizarImagenVisible(imagen) {
    if (imagen.distanciaDesdeArriba < imagen.distanciaVentana) {
      imagen.imagen.classList.add('visible');
    } else {
      imagen.imagen.classList.remove('visible');
    }
  }

  function actualizarDistanciaDesdeArriba(imagen) {
    imagen.distanciaDesdeArriba = imagen.contenedor.getBoundingClientRect().top;
  }

  window.addEventListener('scroll', () => {
    imagenes.forEach(imagen => {
      actualizarDistanciaDesdeArriba(imagen);
      actualizarImagenVisible(imagen);
    });
  });
 
});



