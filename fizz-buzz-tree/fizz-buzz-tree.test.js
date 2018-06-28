'use strict';

describe('fizzbuzztree', () => {

  // it('should return a value of 3 at i', () => {
    
  //   let i = 0; 

  //   for (i = 1; i <= 100; i++) {
  //     var output = '';

  //     if (i % 3 === 0) {output += 'Fizz';}
  //     if (i % 5 === 0) {output += 'Buzz';}

  //     if (output == '') {output = i;}

  //     console.log(output);
  //   }
  //   expect(i[3]).toBe(Fizz);
  // });

  it('should return a value of 3 at i', () => {
    
    let i = 0; 

    for (i = 1; i <= 100; i++) {
      var output = '';

      if (i % 3 === 0) {output += 'Fizz';}
      if (i % 5 === 0) {output += 'Buzz';}

      if (output == '') {output = i;}

      console.log(output);
    }
    expect(output[3]).toBe(Fizz);
  });
});
