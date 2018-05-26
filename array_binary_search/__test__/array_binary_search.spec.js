'use strict';

let BinarySearch = require('../array_binary_search/array-binary_search.js');

describe('BinarySearch', () => {
  it(' will find index of array at second place', () => {
    expect(BinarySearch.BinarySearch([1, 2, 4, 5], 3)).toEqual(2);
  });
  it(' will find index of array ', () => {
    expect(BinarySearch.BinarySearch([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12], 7)).toEqual(6);
  });
  it(' will retunr -1 is the key is not the array', () => {
    expect(BinarySearch.BinarySearch([4,8,23,42], 16)).toEqual(-1);
  });
});