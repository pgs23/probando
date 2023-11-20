// script.js banner
document.addEventListener("DOMContentLoaded", function() {
    const promotion = document.querySelector(".promotion");
    const bannerImage = document.querySelector(".banner-image");

    promotion.addEventListener("mouseenter", function() {
        bannerImage.style.transform = "scale(1.1)";
    });

    promotion.addEventListener("mouseleave", function() {
        bannerImage.style.transform = "scale(1)";
    });
});

// Función para obtener y mostrar imágenes de razas de perros y gatos
function obtenerYMostrarImagenes() {
  // URL de la API de razas de perros
  const apiUrlPerros = 'https://api.thedogapi.com/v1/images/search?limit=4';

  // URL de la API de razas de gatos
  const apiUrlGatos = 'https://api.thecatapi.com/v1/images/search?limit=4' ;

  // Realiza solicitudes GET para obtener imágenes de razas de perros y gatos
  Promise.all([fetch(apiUrlPerros), fetch(apiUrlGatos)])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      // Maneja los datos obtenidos
      const imagenesMascotas = document.getElementById('imagenesMascotas');

      // Limpia el contenedor de imágenes antes de agregar nuevas
      imagenesMascotas.innerHTML = '';

      data[0].slice(0, 4).forEach(imagenPerro => {
        // Crea un elemento de imagen para cada URL de imagen de perro
        const imgElemento = document.createElement('img');
        imgElemento.src = imagenPerro.url;
        imgElemento.alt = 'Perro';
        imgElemento.style.width = '200px'; 
        imgElemento.style.padding = '1em'; // Ajusta el tamaño según tus necesidades

        // Agrega la imagen al contenedor
        imagenesMascotas.appendChild(imgElemento);
      });

      data[1].slice(0, 4).forEach(imagenGato => {
        // Crea un elemento de imagen para cada URL de imagen de gato
        const imgElemento = document.createElement('img');
        imgElemento.src = imagenGato.url;
        imgElemento.alt = 'Gato';
        imgElemento.style.width = '200px'; 
        imgElemento.style.padding = '1rem';
        
         // Ajusta el tamaño según tus necesidades

        // Agrega la imagen al contenedor
        imagenesMascotas.appendChild(imgElemento);
      });
    })
    .catch(error => console.error('Error al obtener datos de la API:', error));
}

// Asigna el manejador de eventos al botón
document.getElementById('botonNuevasImagenes').addEventListener('click', obtenerYMostrarImagenes);

// Llama a la función para obtener y mostrar imágenes al cargar la página
document.addEventListener('DOMContentLoaded', obtenerYMostrarImagenes);