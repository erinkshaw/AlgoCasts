// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let newArr = []
  let arrCount = 0
  let stepCount = n
  for (let row = n; row > 0; row--) {
    newArr.push(new Array(n))
  }
  for (let i = 1; i <= n * n; i++) {
    newArr[arrCount].push(i)
  }
  return newArr
}

module.exports = matrix;

// go ahead and create our array of arrays, but empty -- make them Arrays so they have set lengths
//we know that we have to turn n-1 number of turns until we get to the end of an array and then we have to 'turn'
//then once we have turn n number times we have to take one off of when we turn


