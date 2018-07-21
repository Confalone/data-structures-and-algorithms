'use strict';

const Node = require('./node');

module.exports = class BinarySearchTree {

  constructor(root = null) {
    this.root = root;
  }
  insert(value) {
    if (typeof value != 'number') {
      throw new TypeError('Value must be a number');
    }

    const node = this.root;

    if (!node) {
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => { 
      if (node.value === value) {
        throw new TypeError('Value already exists');
      }
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _insert(node.left);
        }
      } else if (value >= node.value) {

        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right);
        }
      } else {
        return null;
      }
    };
    _insert(node);
  }

  _find(node, value) {
    if (!node) {
      return null;
    } else if (node.value === value) {
      return node;
    } else if (node.value < value) {
      return this._find(node.right, value);
    } else if (node.value > value) {
      return this._find(node.left, value);
    }
  }
  find(value) {
    return this._find(this.root, value);
  }
};
