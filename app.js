import { urlMovies } from "./url.js";
import { urlSeries } from "./url.js";

//Elementos HTML con sus eventos para mostrar un trailer a través del 'btn'
const trailer = document.getElementById('trailer')
const modal = document.getElementById('videoModal');
const closeModal = modal.querySelector('.close')
const openModalBtn = document.querySelectorAll('.btn1')
const openModalBtn2 = document.querySelectorAll('.btn2')

openModalBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        trailer.src = urlMovies[index].trailerUrl
        modal.style.display = 'block';
    });

})

openModalBtn2.forEach((btn, index) => {
  btn.addEventListener('click', () => {
      trailer.src = urlSeries[index].trailerUrl
      modal.style.display = 'block';
  });

})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    stopVideo();
});

const stopVideo = () => {
    trailer.src = ''; // Detiene la reproducción del video
    modal.style.display = 'none'; // Cierra el modal
};



//Filtrado a través de una búsqueda del titulo de la película
const searchInput = document.getElementById("search-input");
const serieContainer = document.getElementById("serie-container")
const movieCards = document.querySelectorAll(".movie-card");
const serieCards = document.querySelectorAll('.serie-card')
const movieTitle = document.querySelector(".title-movies");
const serieTitle = document.querySelector(".title-series");
const msgNoResult = document.getElementById("msg-no-result")

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    //Se necesita para saber si en el resultado de la búsqueda hay o no hay películas o series
    let hasMovieResults = false;
    let hasSerieResults = false;

    movieCards.forEach(card => {
        const title = card.querySelector(".titulo").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = "flex";
            hasMovieResults = true
        } else {
            card.style.display = "none";
        }

      //Fragmento de código para mostrar mensaje cuando el buscador no encuentre un resultado
      if (!hasMovieResults && !hasSerieResults) {
        msgNoResult.style.display = "flex"
      }else {
        msgNoResult.style.display = "none"
      }
    });

    serieCards.forEach(card => {
      const title = card.querySelector(".titulo").textContent.toLowerCase();
      if (title.includes(searchTerm)) {
          card.style.display = "flex";
          hasSerieResults = true;
      } else {
          card.style.display = "none";
      }

      //Fragmento de código para mostrar mensaje cuando el buscador no encuentre un resultado
      if (!hasMovieResults && !hasSerieResults) {
        msgNoResult.style.display = "flex"
      }else {
        msgNoResult.style.display = "none"
      }
  }); 

  //Lo usamos para hacer un tipo de condicional que nos permitirá ocultar el titulo de series
  //o películas en caso de que la búsqueda no arroje alguna de estas dos
  movieTitle.style.display = hasMovieResults ? "flex" : "none";
  serieTitle.style.display = hasSerieResults ? "flex" : "none";

  if (hasSerieResults && !hasMovieResults) {
    serieContainer.style.marginTop = "-90px"; // Cambia este valor según tus necesidades
} else {
    serieContainer.style.marginTop = "-20px"; // Restablecer el margen si no se cumple la condición
}
});




// Función para filtrar tarjetas por categoría
function filtrarPorCategoria(categoria) {
    const cards = document.querySelectorAll('.movie-card, .serie-card');
  
    cards.forEach(card => {
      const cardCategoria = card.getAttribute('data-category');
      if (categoria === 'todas' || cardCategoria === categoria) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  
  }

  document.getElementById('categoria-select').addEventListener('change', function() {
    const seleccionada = this.value;
    filtrarPorCategoria(seleccionada);
  });
  




  