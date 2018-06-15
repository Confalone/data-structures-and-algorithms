'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  
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
  }
}