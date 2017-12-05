// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'
// 1 - 0
// 2 - 2
// 3 - 4
// 4 - 6
//spaces are (n - 1) * 2

//inner loop is for rows and equal to n
//outer loop is (n-1)*2+1 for length
//if j === n then do a #
function pyramid(n) {
  const midpoint = Math.floor((n*2-1)/2)
  for (let i = 0; i < n; i++) {
    let row = ''
    for (let j = 0; j < n*2-1; j++) {
      if (midpoint - i <= j && midpoint + i >= j) {
         row += '#'
      }
      else {
        row += ' '
      }
    }
      console.log(row)
  }
}


//one loop for each row
//the spaces on first row are equal to n (or n +1)
//all rows have to be odd

module.exports = pyramid;
