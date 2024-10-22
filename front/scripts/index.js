console.log(tempData);
// Seleccion de donde se muestran las películas
const movieContainer = document.querySelector('main');

// Función que renderiza los datos de cada película
function renderMovies(data) {
    data.forEach((movie) => {
    // Crea un contenedor para cada película
    const movieElement = document.createElement('section');
    movieElement.classList.add('detalle-pelicula');

    // Aqui se genera el HTML para cada película
    movieElement.innerHTML = `
    <div class="imagen-pelicula">
        <img src="${movie.poster}" alt="${movie.title}">
    </div>
    <div class="info-pelicula">
        <h2>${movie.title}</h2>
        <p><strong>Año:</strong> ${movie.year}</p>
        <p><strong>Género:</strong> ${movie.genre.join(', ')}</p>
        <p><strong>Duración:</strong> ${movie.duration}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Valoración:</strong> ⭐${movie.rate} / 10</p>
    </div>
    `;

    // Agrega la película a la sección principal
    movieContainer.appendChild(movieElement);

    });
}

// Llama a la función para renderizar las películas del array tempData
renderMovies(tempData);
