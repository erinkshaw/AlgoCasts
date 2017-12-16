// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const vowels = ['a','e','i','o','u']
//   const arr = str.toLowerCase().split('')
//   let count = 0
//   arr.forEach( letter => { if (vowels.includes(letter)) count++})
//   return count
// }

module.exports = vowels;

//using recursion

function vowels(str) {
  const vowel = ['a','e','i','o','u']
  str = str.toLowerCase()
  if (!str) return 0
  else if (vowel.includes(str[0])) return 1 + vowels(str.slice(1))
  else return vowels(str.slice(1))
}

