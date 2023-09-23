// Define a function named sumOfArguments that accepts a variable number of arguments using the rest parameter (...items)
function sumOfArguments(...items) {
  // Check if there is only one argument and it is an array
  if (items.length == 1 && Array.isArray(items[0])) {
    // If the single argument is an array, spread its elements into the 'items' array
    items = [...items[0]];
  }
  // Use the reduce method to calculate the sum of all elements in the 'items' array
  return items.reduce((a, b) => a + b);
}

// Example usage: Call the sumOfArguments function with an array as an argument
console.log(sumOfArguments([1, 2, 3, 4])); // Expected output: 10 (sum of elements in the array)
