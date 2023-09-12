// Define an array of numbers
const numbers = [1, 2, 3, 4];

// Call the "move" function with parameters and store the result in "output"
const output = move(numbers, 5, 2);

// Define the "move" function to reposition elements in an array
function move(array, index, offset) { 
  // Calculate the new position after applying the offset
  const position = index + offset;

  // Check if the new position is out of bounds
  if (position >= array.length || position < 0) {
    console.error('Invalid offset'); // Display an error message
    return; // Exit the function
  }

  // Create a copy of the input array to avoid modifying the original
  const output = [...array];

  // Remove an element from the specified index and store it in "element"
  const element = output.splice(index, 1)[0];

  // Insert the removed element at the new position without removing any other elements
  output.splice(position, 0, element);

  // Return the modified array
  return output;
}

// Display the result of the "move" function
console.log(output);
// Test Case 1: Move an element from index 2 to index 4 in the array
const numbers1 = [1, 2, 3, 4];
const output1 = move(numbers1, 2, 2);
console.log(output1); // Should output [1, 2, 4, 3]

// Test Case 2: Move an element from index 0 to index 3 in the array
const numbers2 = [10, 20, 30, 40];
const output2 = move(numbers2, 0, 3);
console.log(output2); // Should output [20, 30, 40, 10]

// Test Case 3: Try to move an element to an invalid negative index
const numbers3 = [5, 6, 7, 8];
const output3 = move(numbers3, 1, -2);
console.log(output3); // Should display 'Invalid offset' and return undefined

// Test Case 4: Try to move an element to an invalid index beyond the array length
const numbers4 = [100, 200, 300];
const output4 = move(numbers4, 2, 2);
console.log(output4); // Should display 'Invalid offset' and return undefined

// Test Case 5: Move an element within an array with a single element
const numbers5 = [42];
const output5 = move(numbers5, 0, 0);
console.log(output5); // Should output [42]
