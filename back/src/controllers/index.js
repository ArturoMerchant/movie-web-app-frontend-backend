const movieService = require("../services/index");

const getData = async (req, res) => {
    try {
    const movies = await movieService.getMovies();
    res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener datos de películas" });
    }
    };

    const addData = async (req, res) => {

        try {
            const movieData = req.body; 
            
            console.log("Datos recibidos:", movieData);
        
            const newMovie = await movieService.createMovie(movieData); 
            res.status(201).json(newMovie); 
        } catch (error) {
            res.status(500).json({ message: error.message }); 
        }
    }

module.exports = {
    getData, addData,
}