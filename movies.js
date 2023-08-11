import { urlMovies } from "./url.js";

const trailer = document.getElementById('trailer')
const modal = document.getElementById('videoModal');
const closeModal = modal.querySelector('.close')
const openModalBtn = document.querySelectorAll('.btn')


openModalBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        trailer.src = urlMovies[index].trailerUrl
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

