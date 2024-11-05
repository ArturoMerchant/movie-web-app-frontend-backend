

const rateSlider = document.getElementById('rate');
const rateValue = document.getElementById('rateValue');

rateSlider.addEventListener('input', function() {
    rateValue.textContent = rateSlider.value;
});


function handleFormSubmit(event) {
    event.preventDefault();

    // Validar que todos los campos estén completos
    const title = document.getElementById('title').value.trim();
    const year = document.getElementById('year').value.trim();
    const director = document.getElementById('director').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const poster = document.getElementById('poster').value.trim();
    const selectedGenre = document.querySelector('input[name="genre"]:checked');
    const rate = parseFloat(document.getElementById('rate').value);

    // Mensaje de error si algún campo está vacío
    if (!title || !year || !director || !duration || !poster || !selectedGenre || isNaN(rate)) {
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
        return;
    }

    // Crear el objeto JSON con los datos de la película
    const movieData = {
        title: title,
        year: parseInt(year),
        director: director,
        duration: duration,
        genre: selectedGenre.value,
        rate: rate,
        poster: poster
    };

    // Muestra el JSON en la consola (o envíalo al servidor aquí)
    console.log(movieData);
}

// Asignar la función al evento de submit del formulario
document.getElementById('movieForm').addEventListener('submit', handleFormSubmit);
