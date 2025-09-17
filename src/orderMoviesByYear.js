const movies = require('../data/movies')

const orderMoviesByYear = (movies) => {
  return movies
    .map((filme) => filme)
    .sort((a, b) => {
      return a.anoLancamento - b.anoLancamento
    })
}

//console.log(orderMoviesByYear(movies))

module.exports = {
  orderMoviesByYear,
}
