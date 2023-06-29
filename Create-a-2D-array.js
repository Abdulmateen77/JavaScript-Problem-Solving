function createMatrix(size) {
  array = []
  for (let i = 0; i <size; i++){
    array.push([])
    for(let j = 0; j < size; j++){
      array[i].push(j)
    }
  }
  return array
}

if (JSON.stringify(createMatrix(2)) !== JSON.stringify([[0, 1], [0, 1]]))
  console.log("Test fails: Expected [ [ 0, 1 ], [ 0, 1 ] ] for input size = 2");
else
  console.log("Sample test case for input size = 2 passed!");

module.exports = createMatrix

