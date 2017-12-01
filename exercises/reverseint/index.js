// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//using data type manipulation
// function reverseInt(n) {
//   let reverse = n.toString().split('')
//   reverse = reverse[0] === '-' ? Number(reverse.slice(1).reverse().join('')) * -1 : Number(reverse.reverse().join(''))
//    return reverse
// }

//without changing data type
function reverseInt(n) {
  let newInt = 0
  let oldInt = Math.sign(n) * n
  while (oldInt > 0) {
    newInt *= 10
    newInt += oldInt % 10
    oldInt = Math.floor(oldInt / 10)
  }
  return Math.sign(n) * newInt
}

module.exports = reverseInt;


//use Math.sign() pos returns 1 neg returns -1
