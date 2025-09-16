const movies = require('../data/movies')

const getAllTitles = (movies) => {
  return movies.map((filme) => {
    return filme.titulo
  })
}

module.exports = {
  getAllTitles,
}
