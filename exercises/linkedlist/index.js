// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next || null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
}

LinkedList.prototype.insertFirst = function(data) {
  const node = new Node(data, this.head)
  this.head = node
  this.length++
}

LinkedList.prototype.size = function() {
  return this.length
}

LinkedList.prototype.getFirst = function() {
  return this.head
}

LinkedList.prototype.getLast = function() {
  let currentNode = this.head
  while (currentNode.next) {
    currentNode = currentNode.next
  }
  return currentNode
}

LinkedList.prototype.clear = function() {
  this.head = null
  this.length = 0
}

LinkedList.prototype.removeFirst = function() {
  this.head = this.head.next
  this.length--
}

LinkedList.prototype.removeLast = function() {
  if (this.head) {
    let currentNode = this.head
    if (!currentNode.next) this.head = null
    else {
      while (currentNode.next.next) {
        currentNode = currentNode.next
      }
      currentNode.next = null
      this.length--
    }
  }
}

LinkedList.prototype.insertLast = function(val) {
  const node = new Node(val)
  if (!this.head) this.head = node
  else {
    let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
  }
  this.length++
}

LinkedList.prototype.getAt = function(index) {
  let counter = 0
  let currentNode = this.head || null
  if (!currentNode) return null
  while (counter < index) {
    if (!currentNode.next) return null
    currentNode = currentNode.next
    counter++
  }
  return currentNode
}

LinkedList.prototype.removeAt = function(index) {
  const removeNode = this.getAt(index)
  const prevNode = this.getAt(index - 1)
  if (!removeNode) return null
  if (removeNode === this.head) this.head = removeNode.next
  prevNode.next = removeNode.next
}

LinkedList.prototype.insertAt = function(data, index) {
  const newNodeIndex = new Node(data)
  if (!this.head) this.head = newNodeIndex
  else if (index > this.length - 1) this.insertLast(data)
  else if (index === 0) {
    newNodeIndex.next = this.head
    this.head = newNodeIndex
  }
  else {
    const formerIndexNode = this.getAt(index)
    const prevNode = this.getAt(index - 1)
    newNodeIndex.next = formerIndexNode
    prevNode.next = newNodeIndex
  }
}

LinkedList.prototype.forEach = function(func) {
  let currentNode = this.head
  while (currentNode) {
    let nextNode = currentNode.next
    currentNode = func(currentNode)
    currentNode = nextNode
  }
}


module.exports = { Node, LinkedList };
