const movies = require('../data/movies')

function getMoviesByActor(ator) {
  return movies.filter((filme) => {
    return filme.elenco.includes(ator)
  })
}

module.exports = {
  getMoviesByActor,
}
