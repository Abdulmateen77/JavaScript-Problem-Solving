// Function to calculate the sum of all elements in a matrix.
function matrixSum(arr) {
  let sum = 0; // Variable to store the sum of elements.
  
  // Nested loops to iterate through each element of the matrix.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // Add the current element to the sum.
      sum = sum + arr[i][j];
    }
  }
  
  return sum; // Return the sum of elements in the matrix.
}

// Test case to check the functionality of the matrixSum function.
if (matrixSum([[5, 1], [2, 4]]) !== 12) {
  // If the calculated sum is not equal to 12, display test failure message.
  console.log("Test fails: Expected sum = 12 for the given matrix [[5, 1], [2, 4]]");
} else {
  // If the calculated sum is equal to 12, display test success message.
  console.log("Sample test case for the given matrix [[5, 1], [2, 4]] passed!");
}
