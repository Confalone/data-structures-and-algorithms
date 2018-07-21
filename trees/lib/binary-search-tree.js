'use strict';

const Node = require('./node');

module.exports = class BinarySearchTree {

  constructor(root = null) {
    this.root = root;
  }
  insert(value) {  // BIG O = O(n) n = height of tree
    if (typeof value != 'number') {
      throw new TypeError('Value must be a number');
    }

    const node = this.root;

    if (!node) {
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => { // BIG O = O(n) n = height of tree
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

  _find(node, value) {  // BIG O = O(n) n = height of the tree
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
  find(value) {  // BIG O = O(n) n = height of the tree
    return this._find(this.root, value);
  }

  serialize() { // BIG O(n) = height of the tree
    let arrayOfNodes = [];
    let current = this.head;

    while(current) {
      arrayOfNodes.push(current.value);
      current = current.next;
    }

    if(arrayOfNodes.length === 0) throw 'BST is empty';
    return JSON.stringify(arrayOfNodes);
  }

  deserialize(string) { // BIG O(n) = height of the tree
    if(!string) throw 'we need a string';

    let data = JSON.parse(string);

    for(let i = 0; i < data.length; i++) {
      this.append(data[i]);
    }
    return this;
  }
};
