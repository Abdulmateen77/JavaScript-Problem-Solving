function createMatrix(size) {
  // You only need to implement this function.
  arr = []
  for (let i = 0; i <size; i++){
    arr.push([])
    for(let j = 0; j < size; j++){
      arr[i].push(j)
    }
  }
  return arr
}

if (JSON.stringify(createMatrix(2)) !== JSON.stringify([[0, 1], [0, 1]]))
  console.log("Test fails: Expected [ [ 0, 1 ], [ 0, 1 ] ] for input size = 2");
else
  console.log("Sample test case for input size = 2 passed!");

module.exports = createMatrix

