const axios = require("axios");

const API_URL = "https://students-api.up.railway.app/movies";

const movieService = {

    getMovies : async function fetchMovies() {
        try {
            const response = await axios.get(API_URL);
          return response.data; // Devuelve los datos de las películas
        } catch (error) {
            console.error("Error al obtener datos de películas:", error);
            throw error;
        }
    },

};

module.exports = movieService;