const { list1 } = require("../data/list1");
const { list2 } = require("../data/list2");
const { list3 } = require("../data/list3");
const { highestRatedMovie } = require("../src/highestRatedMovie")

describe('highestRatedMovie', () => {

  it('should return the movie with the highest rating when given an array of movies with valid ratings', () => {

    const [,,,mockMovie] = list1

    const result = highestRatedMovie(list1);

    expect(result).toEqual(mockMovie);
  });

  it('should return the first movie in the array when given an array of movies with only one movie', () => {
    const [,mockMovie] = list2

    const result = highestRatedMovie(list2);

    expect(result).toEqual(mockMovie);
  });

  it('should return the first movie in the array when given an array of movies with equal ratings', () => {
    const [,,,,,mockMovie] = list3

    const result = highestRatedMovie(list3);

    expect(result).toEqual(mockMovie);
  });

  it('should return undefined when given an empty array', () => {
    const movies = [];

    const result = highestRatedMovie(movies);

    expect(result).toBeUndefined();
  });

});
