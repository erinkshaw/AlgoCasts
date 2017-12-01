// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const dict = {}
  let max = 0
  let maxLetter = ''
  str = str.split('').forEach(letter => {
    if (dict[letter]) dict[letter]++
    else dict[letter] = 1
  })
  for (const letter in dict) {
    if (dict[letter] > max) {
      max = dict[letter]
      maxLetter = letter
    }
  }
  return maxLetter
}

module.exports = maxChar;
