'use strict';

module.exports = class BinaryTree {

  constructor(root) {
    this.root = root;
  }

  inOrder() {
    let results = [];

    let walk = (node) => {

      if (node.left) {walk(node.left);}

      results.push(node.value);

      if(node.right) {walk(node.right);}
      
    };
    walk(this.root);

    return results.toString();
  }
};