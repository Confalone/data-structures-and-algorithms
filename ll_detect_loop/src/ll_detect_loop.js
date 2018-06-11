'use strict';


let reverse = reverse () => {
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
}

hasLoop() => {
  
}