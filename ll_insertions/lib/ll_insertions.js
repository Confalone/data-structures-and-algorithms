'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) { 

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

  insertBefore(value) { 

    if(!value) {
      throw 'Must provide a value';
    }

    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  insertAfter(value) {

    if(!value) {
      throw 'Must provide a value';
    }

    let node = new Node(value);

    if(!(this.head)) {
      this.head = none;
      return this;
    }
    
    let current = this.head; 
    while(current.next)
    {
      current = current.next;
    }

    current.next = node;

    return this;
  }
}
module.exports = LinkedList;