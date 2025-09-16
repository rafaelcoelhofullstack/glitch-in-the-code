const movies = require('../data/movies')

function getMovieById(id) {
  return movies.find((filme) => {
    return filme.id === id
  })
}

module.exports = {
  getMovieById,
}
