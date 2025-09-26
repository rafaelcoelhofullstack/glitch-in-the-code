const movies = require('../data/list1')

const displayMovies = (movies) => {
  movies.forEach((filme) => {
    console.log(`Título: ${filme.titulo} - Diretor: ${filme.diretor}`)
  })
}

module.exports = {
  displayMovies,
}
