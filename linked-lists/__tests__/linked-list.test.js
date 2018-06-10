'use strict';

const LinkedList = require('../lib/linked-list');

describe('Linked list', () => {
  it (' should append a node to the end of a linked-list.', () =>{
    let list = new LinkedList(4);
    list.append(new LinkedList(5));
    list.append(new LinkedList(6));

    expect(list.value).toEqual(4);
    expect(list.next.value).toEqual(5);
    expect(list.next.next.value).toEqual(6);
    expect(list.next.next.next).toEqual(null);
  });



});