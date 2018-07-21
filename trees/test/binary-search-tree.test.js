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
    it ('returning the expected values', () => {
      expect(bst.root.value).toEqual(9);
      expect(bst.root.right.value).toEqual(16);
      expect(bst.root.right.left.value).toEqual(10);
      expect(bst.root.left.value).toEqual(4);
      expect(bst.root.left.left.value).toEqual(2);
    });
    it ('throwing an error when giving input that is not a number', () => {
      expect(() => bst.insert('beat it we need a number')).toThrow();
      expect(() => bst.insert(10)).toThrow();
    });
  });

  describe(' to ensure find method is ', () => {
    it ('returning requested node value from the Binary Search Tree', () => {
      expect(bst.find(9).value).toEqual(9);
      expect(bst.find(16).value).toEqual(16);
      expect(bst.find(4).value).toEqual(4);
      expect(bst.find(10).value).toEqual(10);
      expect(bst.find(2).value).toEqual(2);
    });
    it ('returning null if the value is not in the Binary Search Tree', () => {
      expect(bst.find(1)).toEqual(null);
      expect(bst.find(11)).toEqual(null);
    });
  });

  
});