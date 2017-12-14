// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left || null
    this.right = right || null
  }
}

Node.prototype.insert = function(data) {
  const node = new Node(data)
  if (node.data >= this.data) {
    if (!this.right) this.right = node
    else this.right.insert(node.data)
  }
  else {
    if (!this.left) this.left = node
    else this.left.insert(node.data)
  }
}

Node.prototype.contains = function(data) {
  console.log(this)
  if (data === this.data) return this
  else if (data >= this.data) {
    if (!this.right) return null
    else return this.right.contains(data)
  } else {
    if (!this.left) return null
    else return this.left.contains(data)
  }
}

module.exports = Node;
