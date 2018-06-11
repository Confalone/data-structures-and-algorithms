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

  it('prepend: node value passed in should replace value of the head node', () => {
    let list = new LinkedList();
    list.append(4);
    list.prepend(3);

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(4);
  });

  it('prepend: node should be prepended with a longer linked list', () => {
    let list = new LinkedList();
    list.append(4);
    list.append(3);
    list.append(2);
    list.prepend(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(4);
  });

  it('prepend: should throw an error if no value is given', () => {
    let list = new LinkedList();
    
    expect(() => {
      list.prepend();
    }).toThrow();
  });

  it('reverse: should return a reversed order of a list', () => {
    let list = new LinkedList();
    list.append(4);
    list.append(3);
    list.append(2);
    list.reverse();

    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(4);
    expect(list.head.next.next.next).toBeNull();
  });

  it('reverse: if linked list has one value, it should return the same ll', () => {
    let list = new LinkedList();
    list.append(1);
    list.reverse();

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  it('remove(offset): should remove a chosen element from the ll', () => {
    let list = new LinkedList();
    list.append(6);
    list.append(7);
    list.append(8);

    list.remove(1);

    expect(list.head.value).toEqual(6);
    expect(list.head.next.value).toEqual(8);
  });

  it('remove(offset): should throw an error if the offset value is larger than length of ll', () => {
    let list = new LinkedList();
    list.append(6);
    list.append(7);
    list.append(8);

    expect(() => {
      list.remove(10);
    }).toThrow();
  });

  it('remove(offset): should throw an error if the offset value is not a number', () => {
    let list = new LinkedList();
    list.append(6);
    list.append(7);
    list.append(8);

    expect(() => {
      list.remove('tyler');
    }).toThrow();
  });

  it('serialize: should convert an object to string form', () => {
    let list = new LinkedList();
    list.append(6);
    list.append(7);
    list.append(8);
    let serialized = list.serialize();

    expect(serialized).toEqual('[6,7,8]');

  });

  it('serialize: should throw an error if linked list is empty', () => {
    let list = new LinkedList();
  
    expect(() => {
      list.serialize();
    }).toThrow();
  });

  it('deserialize: should throw an error if a string is not provided', () => {
    let list = new LinkedList();
  
    expect(() => {
      list.deserialize();
    }).toThrow();
  });

  it('deserialize: should take a serialized string and convert it to an object', () => {
    let list = new LinkedList();
    list.append(6);
    list.append(7);
    list.append(8);

    let serialized = list.serialize();

    let secondList = new LinkedList();
    secondList.deserialize(serialized);

    expect(secondList).toEqual(list);
  });
});