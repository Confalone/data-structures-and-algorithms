# Tree Data Structure
#### Author: Tyler Confalone

## Data Structure: Binary Search Tree
#### Instructions:
 How to make your BST:
 ```
 let bst = new BST();

  bst.insert(9);
  bst.insert(16);
  bst.insert(4);
  bst.insert(10);
  bst.insert(2);
 ```
### `insert` method: 
Insert methods allows a number value to be inserted into the BST.  An error will be thrown if input is a value other than a number.

ex:
  ```
  expect(bst.root.value).toEqual(9);
  expect(bst.root.right.value).toEqual(16);
  expect(bst.root.right.left.value).toEqual(10);     
  expect(bst.root.left.value).toEqual(4);
  expect(bst.root.left.left.value).toEqual(2);
  ```

### `find` method:
Find method searches the BST for a number value and returns said number value.  An error will be thrown if input is a value other than a number.

ex:
```
expect(bst.find(9).value).toEqual(9);
expect(bst.find(16).value).toEqual(16);
expect(bst.find(4).value).toEqual(4);
expect(bst.find(10).value).toEqual(10);
expect(bst.find(2).value).toEqual(2);
```

