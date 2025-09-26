const movies = require('../data/movies')

const nolanMoviesByRating = (movies) => {
  return movies.filter((filme) => {
    return filme.diretor == 'Christopher Nolan'
  })
}

console.log(nolanMoviesByRating(movies))

module.exports = {
  nolanMoviesByRating,
}
