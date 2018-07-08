'use strict';

module.exports = function fizzBuzzTree(tree) {

  let walk = (node) => {
    if (node.left) {
      walk(node.left);
    }
    if (node.value % 3 === 0) {node.value = 'Fizz';}
    else if (node.value % 5 === 0) {node.value = 'Buzz';}

    if (node.right) {
      walk(node.right);
    }
  };

  walk(tree.root);
  
  return tree;
  
};
