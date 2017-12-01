// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//naive approach
// function reverse(str) {
//   let result = ''

//   for (var i = str.length - 1; i >= 0; i--) {
//     result += str.charAt(i)
//   }
//   return result
// }


//recursive approach
function reverse(str) {
  if (str.length === 1) return str
  else {
    return reverse(str.charAt(str.length - 1)) + reverse(str.slice(0, -1))
  }
}

module.exports = reverse;
