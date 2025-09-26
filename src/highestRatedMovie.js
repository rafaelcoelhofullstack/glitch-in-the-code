const movies = require('../data/movies')

const highestRatedMovie = (movies) =>
  movies
    .sort((a, b) => b.avaliacao - a.avaliacao)
    .find((filme) => filme.avaliacao >= 8)

module.exports = {
  highestRatedMovie,
}
