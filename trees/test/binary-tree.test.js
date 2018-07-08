'use strict';

const BinaryTree = require('../lib/binary-tree');
const Node = require('../lib/node');

describe('inOrder() of BinaryTree', () => {
  it('Testing that inOrder() returns a string.', () => {

    const t = new Node('T');
    const y = new Node('Y');
    const l = new Node('L');
    const e = new Node('E');
    const r = new Node('R');
    const c = new Node('C');
    const o = new Node('O');

    const tree = new BinaryTree(t);

    t.left = y;
    t.right = l;
    y.left = e;
    y.right = r;
    l.left = c;
    l.right = o;

    let value = tree.inOrder();
    expect(typeof(value)).toBe('string');
  });

  it('expecting to receive the correct node values returned in order', () => {
    const t = new Node('T');
    const y = new Node('Y');
    const l = new Node('L');
    const e = new Node('E');
    const r = new Node('R');
    const c = new Node('C');
    const o = new Node('O');

    const tree = new BinaryTree(e);

    e.left = y;
    e.right = c;
    y.left = t;
    y.right = l;
    c.left = r;
    c.right = o;

    let value = tree.inOrder();

    expect(value).toBe('T,Y,L,E,R,C,O');
  });

  it('expects value to be undefined', () => {
    const t = new Node('T');
    const y = new Node('Y');
    const l = new Node('L');
    const e = new Node('E');
    const r = new Node('R');
    const c = new Node('C');
    const o = new Node('O');

    const tree = new BinaryTree(e);

    e.left = y;
    e.right = c;
    y.left = t;
    y.right = l;
    c.left = r;
    c.right = o;

    let value = tree.inOrder();
    expect(value).toBeDefined();

  });
});