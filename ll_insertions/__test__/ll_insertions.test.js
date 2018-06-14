'use strict';

const LinkedList = require('../lib/linked-list');

describe('Linked list', () => {
  it ('append: should append a node to the end of a linked-list.', () =>{
    let list = new LinkedList();
    list.append(4);
    list.append(5);
    list.append(6);

    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(5);
    expect(list.head.next.next.value).toEqual(6);
    expect(list.head.next.next.next).toEqual(null);
  });

  it('append: should throw an error if no value is given', () => {
    let list = new LinkedList();
    
    expect(() => {
      list.append();
    }).toThrow();
  });

  it('append: if linked list is empty, value should replace the head value', () => {
    let list = new LinkedList();
    list.append(9);

    expect(list.head.value).toEqual(9);
  });

  it('insertBefore: node value passed in should replace value of the head node', () => {
    let list = new LinkedList();
    list.append(4);
    list.prepend(3);

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(4);
  });

  it('insertBefore: node should be prepended with a longer linked list', () => {
    let list = new LinkedList();
    list.append(4);
    list.append(3);
    list.append(2);
    list.prepend(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(4);
  });

  it('insertBefore: should throw an error if no value is given', () => {
    let list = new LinkedList();
    
    expect(() => {
      list.prepend();
    }).toThrow();
  });
  it ('insertAfter: should append a node to the end of a linked-list.', () =>{
    let list = new LinkedList();
    list.append(4);
    list.append(5);
    list.append(6);

    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(5);
    expect(list.head.next.next.value).toEqual(6);
    expect(list.head.next.next.next).toEqual(null);
  });

  it('insertAfter: should throw an error if no value is given', () => {
    let list = new LinkedList();
    
    expect(() => {
      list.append();
    }).toThrow();
  });

  it('insertAfter: if linked list is empty, value should replace the head value', () => {
    let list = new LinkedList();
    list.append(9);

    expect(list.head.value).toEqual(9);
  })
});