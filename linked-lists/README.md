[![Build Status](https://travis-ci.com/Confalone/data-structures-and-algorithms.svg?branch=linked-lists)](https://travis-ci.com/Confalone/data-structures-and-algorithms)

# Linked List Data Structure - Big O

## Instructions
  In order to use this app you must first: initialize npm, install jest, install travis.yml, install npm test.  Enjoy and please let me know if I need to put more detailed instructions.

## Modules

* `append(value)` - 

### Append takes a value adds the value onto the end of an list, and returns the new list.  It has an O(n) because the length of the list can vary making the amount of time it takes to run vary.
```
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
```

* `prepend(value)`

### Prepend takes a value and adds it on the front of the list.  It has an O(1) because it just needs to find the first element in the linked list.
```
prepend(value) { // BIG O -> O(1)

    if(!value) {
      throw 'Must provide a value';
    }

    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
```

* `reverse()`

### Reverse returns a new list that is in backwards order to the original list. 
```
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
```

* `remove(offset)`

### remove(offset) takes an element off of a list and returns the new list.
```
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
```

* `serialize()`

### Serialize converts an object to string form.  Than returns the new serilaized string.
```
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
```

* `deserialize()`

### Desrialize takes in a serilaized string and converts it to an object.  Than returns the new object.
```
deserialize(string) { // BIG O(n)
    if(!string) throw 'we need a string';

    let data = JSON.parse(string);

    for(let i = 0; i < data.length; i++) {
      this.append(data[i]);
    }
    return this;
  }
}
```