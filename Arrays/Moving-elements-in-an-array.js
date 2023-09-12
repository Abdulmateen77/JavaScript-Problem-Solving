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
