const movieService = require("../services/index");

const testController = async (req, res) => {
    try {
    const movies = await movieService.getMovies();
      res.status(200).json(movies); // Envía los datos de las películas como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: "Error al obtener datos de películas" });
    }
    };

module.exports = {
    testController,
}