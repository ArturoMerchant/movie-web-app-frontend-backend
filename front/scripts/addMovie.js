

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
    const selectedGenres = document.querySelectorAll('input[name="genre"]:checked');
    const rate = parseFloat(document.getElementById('rate').value);

    const genres = Array.from(selectedGenres).map((genre) => genre.value);

    
    if (!title || !year || !director || !duration || !poster || !selectedGenres || isNaN(rate)) {
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
        return;
    }

    // Crea el objeto JSON con los datos de la película
    const movieData = {
        title: title,
        year: parseInt(year),
        director: director,
        duration: duration,
        genre: genres,
        rate: rate,
        poster: poster
    };

    // se envia el json al servidor
    fetch('http://localhost:3000', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(movieData) 
    })
    .then(response => {
        if (response.ok) {
            
            return response.json(); 
        } else {
            
            throw new Error('Error al enviar la película al servidor');
        }
    })
    .then(data => {
        
        alert('Película añadida con éxito');
        console.log(data); 
    })
    .catch(error => {
        
        alert('Ocurrió un error al enviar los datos');
        console.error(error);
    });

}


document.getElementById('movieForm').addEventListener('submit', handleFormSubmit);
