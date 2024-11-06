
const Movie = require("../models/movie");



const movieService = {

    getMovies : async function fetchMovies() {
        const movies = await Movie.find();
        console.log(movies)
        return movies;
    },

};

module.exports = movieService;