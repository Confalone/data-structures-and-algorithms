'use strict';

module.exports = exports = {};

exports.insertShiftArray = (array, number) => {

  let insertShiftArray = [];
  let mid = Math.ceil(array.length/2);

  for (let i=0;i<array.length+1; i++) {
    if (i<mid) {
      insertShiftArray[i] = array[i];
    }
    if (i===mid) {
      insertShiftArray[i] = number;
    }
    else if (i>mid) {
      insertShiftArray[i] = array[i-1];
    }
  }
  return insertShiftArray;
};