'use strict';


const BST = require('../lib/binary-search-tree');

describe('testing BST', () => {
  
  let bst = new BST();

  bst.insert(9);
  bst.insert(16);
  bst.insert(4);
  bst.insert(10);
  bst.insert(2);

  describe(' to ensure insert method is ', () => {
    it (' returning the expected values', () => {
      expect(bst.root.value).toEqual(9);
      expect(bst.root.right.value).toEqual(16);
      expect(bst.root.right.left.value).toEqual(10);
      expect(bst.root.left.value).toEqual(4);
      expect(bst.root.left.left.value).toEqual(2);
    });
  });
});