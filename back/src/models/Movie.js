const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    yeat: Number,
    director: String,
    duration: Number,
    genre: Array,
    rate: Number,
    poster: String,
});

const Movie = mongoose.model("User", movieSchema);

module.exports = Movie;




