'use strict';

module.exports = function fizzBuzzTree(tree) {

  let _walk = (node) => {
    if (node.left) {_walk(node.left);}

    if(node.value % 15 === 0) {node.value = 'FizzBuzz';}
    else if (node.value % 3 === 0) {node.value = 'Fizz';}
    else if (node.value % 5 === 0) {node.value = 'Buzz';}

    if (node.right) {_walk(node.right);}
  };

  _walk(tree.root);
  
  return tree;
  
};
