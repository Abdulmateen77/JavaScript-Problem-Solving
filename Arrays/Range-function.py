// Define a function named arrayFromRange that generates an array of numbers within a specified range.
function arrayFromRange(min, max) {
  // Create an empty array called 'output' to store the generated numbers.
  const output = [];
  
  // Use a for loop to iterate through numbers from 'min' to 'max' (inclusive).
  for (let num = min; num <= max; num++) {
    // Push each number into the 'output' array.
    output.push(num);
  }
  
  // Return the 'output' array containing the generated numbers.
  return output;
}

// Example usage: Call the arrayFromRange function to generate an array of numbers from 1 to 5.
console.log(arrayFromRange(1, 5)); // Expected output: [1, 2, 3, 4, 5] (array of numbers within the specified range)
