$.get("http://localhost:3000/", function(data) {
    console.log(data);
    // Llama a la función para renderizar las películas del array tempData
renderMovies(data);
});
// Seleccion de donde se muestran las películas
const movieContainer = document.querySelector('main');

// Función que renderiza los datos de cada película
function renderMovies(data) {
    // Vaciar el contenedor antes de agregar nuevas películas
    movieContainer.innerHTML = ''; // Limpia el contenedor para evitar duplicados

    // Crea un contenedor para las tarjetas
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('row'); // Agrega la clase 'row' de Bootstrap para alinear las tarjetas

    data.forEach((movie) => {
        // Crea un contenedor para cada tarjeta
        const cardElement = document.createElement('div');
        cardElement.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4'); // Clases de Bootstrap para el diseño responsivo

        // Aquí se genera el HTML para cada tarjeta de película
        cardElement.innerHTML = `
            <div class="card">
                <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text"><strong>Año:</strong> ${movie.year}</p>
                    <p class="card-text"><strong>Género:</strong> ${movie.genre.join(', ')}</p>
                    <p class="card-text"><strong>Duración:</strong> ${movie.duration} min</p>
                    <p class="card-text"><strong>Director:</strong> ${movie.director}</p>
                    <p class="card-text"><strong>Valoración:</strong> ⭐${movie.rate} / 10</p>
                </div>
            </div>
        `;

        // Agrega la tarjeta al contenedor de tarjetas
        cardContainer.appendChild(cardElement);
    });

    // Agrega el contenedor de tarjetas al contenedor principal
    movieContainer.appendChild(cardContainer);
}



