// Function to create a matrix of given size
function createMatrix(size) {
  // Initialize an empty array to store the matrix
  let array = [];

  // Loop through each row
  for (let i = 0; i < size; i++) {
    array.push([]); // Push an empty array to create a new row

    // Loop through each column in the current row
    for (let j = 0; j < size; j++) {
      array[i].push(j); // Push the column index to the current row
    }
  }

  return array; // Return the created matrix
}

// Compare the result of createMatrix with an expected result for a sample test case
if (JSON.stringify(createMatrix(2)) !== JSON.stringify([[0, 1], [0, 1]])) {
  console.log("Test fails: Expected [ [ 0, 1 ], [ 0, 1 ] ] for input size = 2");
} else {
  console.log("Sample test case for input size = 2 passed!");
}

// Export the createMatrix function to be used in other modules
module.exports = createMatrix;
