'use strict';

const LinkedList = require('./11_kth_from_end');

it('ll_kth_from_end(): should remove a chosen element from the ll', () => {
  let list = new LinkedList();
  list.append(6);
  list.append(7);
  list.append(8);

  list.remove(1);

  expect(list.head.value).toEqual(6);
  expect(list.head.next.value).toEqual(8);
});

it('ll_kth_from_end: should throw an error if the offset value is larger than length of ll', () => {
  let list = new LinkedList();
  list.append(6);
  list.append(7);
  list.append(8);

  expect(() => {
    list.remove(10);
  }).toThrow();
});

it('ll_kth_from_end(): should throw an error if the offset value is not a number', () => {
  let list = new LinkedList();
  list.append(6);
  list.append(7);
  list.append(8);

  expect(() => {
    list.remove('tyler');
  }).toThrow();
});