// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slowNode = list.head
  let fastNode = slowNode.next
  while (fastNode) {
    if (slowNode === fastNode) return true
    slowNode = slowNode.next
    fastNode = fastNode.next.next
  }
  return false
}

module.exports = circular;
