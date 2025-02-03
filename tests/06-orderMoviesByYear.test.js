const { orderMoviesByYear } = require("../src/orderMoviesByYear");
const { moviesList2Mock, expectedList2Mock, expectedList1Mock, moviesList1Mock } = require("./mocks/mock");

describe('orderMoviesByYear', () => {

  it('should return a sorted list of movies based on their release year', () => {
   
    const result = orderMoviesByYear(moviesList1Mock);
    expect(result).toEqual(expectedList1Mock);
  });

  it('should return an empty list if the input list is empty', () => {
    const movies = [];
    const expected = [];
    const result = orderMoviesByYear(movies);
    expect(result).toEqual(expected);
  });

  it('should return a new sorted list and does not modify the original list', () => {
    const result = orderMoviesByYear(moviesList2Mock);
    expect(result).toEqual(expectedList2Mock);
    expect(result).not.toBe(moviesList2Mock);
  });

});
