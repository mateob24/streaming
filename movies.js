document.addEventListener("DOMContentLoaded", function () {
  const btnMovie = document.querySelectorAll(".btn-movie");
  const iframes = document.querySelectorAll(".trailer");

  const imgMovie = document.querySelectorAll(".img-movie");
//   const divTrailer = document.querySelector(".trailer");
    btnMovie.forEach((btn, index) => {
        btn.addEventListener('click', () => {

        if (iframes[index].style.display == "none") {
            imgMovie[index].style.display = "none"
            iframes[index].style.display = "flex"
        }else {
            iframes[index].style.display = "none";
            imgMovie[index].style.display = "block"
        }
        
        });
    });

});


//MOVIE
// const params = new URLSearchParams(window.location.search);
// const trailerURL = decodeURIComponent(params.get("trailer"));
// const imageURL = decodeURIComponent(params.get("image"));
// const title = decodeURIComponent(params.get("title"));
// const description = decodeURIComponent(params.get("description"));

// // Mostrar los detalles de la película
// showMovieDetails(trailerURL, imageURL, title, description);


// // Función para mostrar los detalles de la película seleccionada
// function showMovieDetails(trailerURL, imageURL, title, description) {
//     const movieImage = document.getElementById("movie-image");
//     movieImage.src = imageURL;
  
//     const trailerContainer = document.getElementById("trailer-container");
//     trailerContainer.innerHTML = `
//       <h2>${title}</h2>
//       <p>${description}</p>
//       <p>Trailer:</p>
//       <iframe width="560" height="315" src="${trailerURL}" frameborder="0" allowfullscreen></iframe>
//     `;
//   }

//SCRIPTS - CATEGORY
// const movies = [
//     { image:"https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810", description: "Coco es una película de animación por ordenador producida por Pixar Animation Studios y distribuida por Walt Disney Studios Motion Pictures." ,title: "Coco", category: "suspenso", trailer: "https://www.youtube.com/embed/awzWdtCezDo" },
//     { image:"https://flxt.tmsimg.com/assets/p10569669_p_v10_aa.jpg" , description: "es una película mexicana-estadounidense de comedia romántica y de aventuras en 3D, inspirada en la celebración del Día de Muertos" ,title: "El libro de la vida", category: "romántica, aventuras, comedia", trailer: "https://www.youtube.com/embed/JvIvF8ST8CY" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
//     { title: "", category: "", trailer: "" },
// ];

// const moviesContainer = document.getElementById("movies-container");
// const detailsContainer = document.getElementById("details-container");
// const searchInput = document.getElementById("search");

// // Función para mostrar las películas y series en la página
// function displayMovies(filteredMovies) {
//   moviesContainer.innerHTML = "";
//   filteredMovies.forEach(movie => {
//     const movieCard = document.createElement("div");
//     movieCard.className = "movie-card";
//     movieCard.innerHTML = `
//     <h3>${movie.title}</h3>
//       <img src="${movie.image}" alt="${movie.title}" class="movie-image">
//       <p>Categoría: ${movie.category}</p>
//       <button class="ver-mas-btn" data-trailer="${movie.trailer}" data-image="${movie.image}" data-title="${movie.title}" data-description="${movie.description}">Ver más</button>
//     `;
//     moviesContainer.appendChild(movieCard);
//   });
// }

// // Función para mostrar los detalles de la película seleccionada
// // Función para mostrar los detalles de la película seleccionada
// function showMovieDetails(trailerURL, imageURL) {
//   // Obtener los parámetros de la URL
//   const params = new URLSearchParams(window.location.search);
//   const title = decodeURIComponent(params.get("title"));
//   const description = decodeURIComponent(params.get("description"));

//   detailsContainer.innerHTML = `
//     <img src="${imageURL}" alt="Portada de la película" class="movie-image">
//     <h2>Detalles de la película</h2>
//     <h3>${title}</h3>
//     <p>${description}</p>
//     <p>Trailer:${trailer}</p>
//     <iframe width="360" height="315" src="${trailerURL}" frameborder="0" allowfullscreen></iframe>
//   `;
// }


// // Función para filtrar las películas por título o categoría
// function filterMovies(searchTerm) {
//   const filteredMovies = movies.filter(movie => {
//     return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//            movie.category.toLowerCase().includes(searchTerm.toLowerCase());
//   });
//   displayMovies(filteredMovies);
// }

// // Mostrar todas las películas al cargar la página
// displayMovies(movies);

// // Manejar la búsqueda en tiempo real
// searchInput.addEventListener("input", () => {
//   const searchTerm = searchInput.value;
//   filterMovies(searchTerm);
// });

// // Agregar evento para mostrar los detalles de la película al hacer clic en "Ver más"
// moviesContainer.addEventListener("click", (event) => {
//   const target = event.target;
//   if (target.classList.contains("ver-mas-btn")) {
//     const trailerURL = target.getAttribute("data-trailer");
//     const imageURL = target.getAttribute("data-image");
//     const title = target.getAttribute("data-title");
//     const description = target.getAttribute("data-description");

//     // Redirigir a la página de detalles de la película con parámetros en la URL
//     window.location.href = `movie_detail.html?trailer=${encodeURIComponent(trailerURL)}&image=${encodeURIComponent(imageURL)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
//   }
// });

