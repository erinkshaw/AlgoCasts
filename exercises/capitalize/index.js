// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr = str.split(' ')
  arr = arr.map( word =>
    word[0].toUpperCase() + word.slice(1)
  )
  return arr.join(' ')
}


//split the str on the empty space ' '
//loop through and capitalize first letter
// return joined array
module.exports = capitalize;
