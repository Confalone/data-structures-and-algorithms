'use strict';

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  append(value) {
    if(!this.next)
      this.next = value;
    else
      this.next.append(value);

    return this;
  }
}

module.exports = LinkedList;