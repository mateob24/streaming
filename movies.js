import { urlMovies } from "./url.js";
import { urlSeries } from "./url.js";

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


const searchInput = document.getElementById("searchInput");
const movieSerieCards = document.querySelectorAll(".movie-card, .serie-card");

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();

    movieSerieCards.forEach(card => {
        const title = card.querySelector(".titulo").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});






// const btnMovie = document.getElementById('movies')

// btnMovie.addEventListener('click', () => {
//     const hideSection = document.querySelector('.serie-container')
//     if (hideSection.style.display === "flex") {
//         hideSection.style.display = "none"
//     }
// })





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

  const titleMovies = document.querySelector('.title-movies')
  const titleSeries = document.querySelector('.title-series')
  document.getElementById('categoria-select').addEventListener('change', function() {
    const seleccionada = this.value;
    filtrarPorCategoria(seleccionada);
    if (titleSeries.style.display=="flex") {
      
    }
    titleSeries.style.display="none"
  });
  
