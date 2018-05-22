'use strict';

let arrayShift = require('../array-shift/array-shift.js');

describe('insertShiftArray', () => {
  it(' should take an array and input a number in the middle of it', () => {
    expect(arrayShift.insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
  });
  it(' should take an array and input a number in the middle of it', () => {
    expect(arrayShift.insertShiftArray([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12], 7)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
  it(' should take an array and input a number in the middle of it', () => {
    expect(arrayShift.insertShiftArray([4,8,23,42], 16)).toEqual([4,8,16,23,42]);
  });
});