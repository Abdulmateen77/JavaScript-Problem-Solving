//Function to create a matrix of given size
function createMatrix(size) {
  //Initialize an empty array to store the matrix
  let array = [];

  //Loop through each row
  for (let i = 0; i < size; i++) {
    array.push([]); // Push an empty array to create a new row

    //Loop through each column in the current row
    for (let j = 0; j < size; j++) {
      array[i].push(j); // Push the column index to the current row
    }
  }

  return array; // Return the created matrix
}

//Compare the result of createMatrix with an expected result for a sample test case
if (JSON.stringify(createMatrix(2)) !== JSON.stringify([[0, 1], [0, 1]])) {
  console.log("Test fails: Expected [ [ 0, 1 ], [ 0, 1 ] ] for input size = 2");
} else {
  console.log("Sample test case for input size = 2 passed!");
}

//Export the createMatrix function to be used in other modules
module.exports = createMatrix;


const createMatrix = require('./createMatrix'); // Assuming 'createMatrix.js' is the file where the function is defined

//Test case 1: Size = 1
if (JSON.stringify(createMatrix(1)) !== JSON.stringify([[0]])) {
  console.log("Test fails: Expected [ [ 0 ] ] for input size = 1");
} else {
  console.log("Test case for input size = 1 passed!");
}

//Test case 2: Size = 3
if (
  JSON.stringify(createMatrix(3)) !==
  JSON.stringify([[0, 1, 2], [0, 1, 2], [0, 1, 2]])
) {
  console.log("Test fails: Expected [ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ] for input size = 3");
} else {
  console.log("Test case for input size = 3 passed!");
}

//Test case 3: Size = 4
if (
  JSON.stringify(createMatrix(4)) !==
  JSON.stringify([[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]])
) {
  console.log("Test fails: Expected [ [ 0, 1, 2, 3 ], [ 0, 1, 2, 3 ], [ 0, 1, 2, 3 ], [ 0, 1, 2, 3 ] ] for input size = 4");
} else {
  console.log("Test case for input size = 4 passed!");
}

//Additional test cases can be added here...
