const movies = require('../data/movies')

const highestRatedMovie = (movies) => {
  return movies.filter((filme) => filme.avaliacao > 8.6)
}

console.log(highestRatedMovie(movies))

module.exports = {
  highestRatedMovie,
}
