const movies = require('../data/movies')

const availableMovies = (movies) => {
  return movies
    .filter((filme) => filme.disponivel == true)
    .map((filme) => filme.titulo)
}

module.exports = {
  availableMovies,
}
