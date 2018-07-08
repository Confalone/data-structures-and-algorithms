'use strict';

const BinaryTree = require('../trees/lib/binary-tree');
const Node = require('../trees/lib/binary-tree');
const fizzBuzzTree = require('./fizzbuzztree');


let treeToTest = () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);
  const nine = new Node(9);

  const tree = new BinaryTree(one);

  one.left = two;
  one.right = three;
  two.right = four; 
  three.right = five;
  two.left = six; 
  four.right = seven;
  four.left = eight;
  five.left = nine;

  return tree;
};


describe('fizzbuzztree', () => {

  it('should return "Fizz" for values divisible by 3 ', () => {
    let tree = treeToTest();
    fizzBuzzTree(tree);


    expect(tree.root.left.root).toBe(3);
  });
});
