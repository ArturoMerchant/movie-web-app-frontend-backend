
const Movie = require("../models/movie");



const movieService = {

    getMovies : async function fetchMovies() {
        const movies = await Movie.find();
        console.log(movies)
        return movies;
    },

    createMovie : async function (movieData) {

        const movie = new Movie(movieData); 
        await movie.save(); 
        return movie; 
    },

};

module.exports = movieService;