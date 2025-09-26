const movies = require('../data/movies')

const actorsInMovie = (titulo) => {
  const movie = movies.find((filme) => filme.titulo == titulo)

  if (movie) {
    return movie.elenco.slice(0, 2)
  } else {
    return 'Filme não encontrado.'
  }
}

actorsInMovie('Gladiador')

module.exports = {
  actorsInMovie,
}
