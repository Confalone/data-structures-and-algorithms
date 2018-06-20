'use strict';

module.exports = class Queue {

  makingStack() {
  this.enqueueStack = []; 
  this.dequeueStack = [];
  console.log('?', this.makingStack());
  };

  enqueue(val) {
    this.enqueueStack.push(val);
    return this.enqueueStack;
  }

  dequeue() {
    this.dequeueStack.push(A);
    this.dequeueStack.push(B);
    this.dequeueStack.pop();

  }