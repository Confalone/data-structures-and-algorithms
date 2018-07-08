'use strict';

const Node = require('../../linked-lists/lib/node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  ll_kth_from_end(k) {
    let current = this.head;
    let counter = 0;
    let next = current.next;
    let previous = null;
  
    while(counter !== k) {
      if(!current.next) throw 'the k value must be smaller than the length of the Linked List ';
      previous = current;
      current = current.next;
      next = current.next;
      counter++;
    }
  
    if(this.head === current) {
      this.head.next = null;
      this.head = next;
    } else {
      current.next = null;
      previous.next = next;
    }
    return this;
  }

  append(value) { // BIG O -> O(n)

    if(!value) {
      throw 'Must provide a value';
    }

    let node = new Node(value);

    if(!(this.head)) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = node;
      
    return this;
  }

  prepend(value) { // BIG O -> O(1)

    if(!value) {
      throw 'Must provide a value';
    }

    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  reverse() { // BIG O -> O(n)
    let current = this.head;
    let next = null;
    let previous = null;

    while(current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
    return this;
  }

  remove(offset) { // BIG O(n)
    let current = this.head;
    let counter = 0;
    let next = current.next;
    let previous = null;

    if(typeof offset !== 'number') throw 'offset must be a number';

    while(counter !== offset) {
      if(!current.next) throw 'the offset value must be smaller than the length of the Linked List ';
      previous = current;
      current = current.next;
      next = current.next;
      counter++;
    }

    if(this.head === current) {
      this.head.next = null;
      this.head = next;
    } else {
      current.next = null;
      previous.next = next;
    }
    return this;
  }

  serialize() { // BIG O(n)
    let arrayOfNodes = [];
    let current = this.head;

    while(current) {
      arrayOfNodes.push(current.value);
      current = current.next;
    }

    if(arrayOfNodes.length === 0) throw 'linked list is empty';
    return JSON.stringify(arrayOfNodes);
  }

  deserialize(string) { // BIG O(n)
    if(!string) throw 'we need a string';

    let data = JSON.parse(string);

    for(let i = 0; i < data.length; i++) {
      this.append(data[i]);
    }
    return this;
  }
}

module.exports = LinkedList;