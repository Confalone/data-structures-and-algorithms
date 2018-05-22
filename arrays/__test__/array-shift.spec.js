'use strict';

let arrayShift = require('../array-shift/array-shift.js');

describe('insertShiftArray', () => {
  it(' should take an array and input a number in the middle of it', () => {
    expect(arrayShift.insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
  });
  it(' should take an array and input a number in the middle of it', () => {
    expect(arrayShift.insertShiftArray([1, 2, 3, 4, 6, 7, 8, 9], 5)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it(' should take an array and input a number in the middle of it', () => {
    expect(arrayShift.insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
  });
});