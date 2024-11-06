const axios = require("axios");
const Movie = require("../models/movie");

const API_URL = "https://students-api.up.railway.app/movies";

const movieService = {

    getMovies : async function fetchMovies() {
        const movies = await Movie.find();
        console.log(movies)
        return movies;
    },

};

module.exports = movieService;