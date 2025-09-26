const movies = require('../data/movies')

const orderMoviesByYear = (movies) => {
  return (
    movies
      /*
    .map((filme) => {
      return filme.anoLancamento
    })*/
      .sort((a, b) => {
        a.anoLancamento - b.anoLancamento
      })
      .map((filme) => filme.titulo)
  )
}

console.log(orderMoviesByYear(movies))

module.exports = {
  orderMoviesByYear,
}
