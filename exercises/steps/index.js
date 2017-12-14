// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let dash = '#'
  for (var i = 1; i <= n; i++) {
    let dot = ''
    for (var j = n-i; j > 0; j--) {
      dot += ' '
    }
    console.log(dash.concat(dot))
    dash += '#'
  }
}

module.exports = steps;

//solve with recursion

//nested loop?

//react  context? implicitly pass props to all children
