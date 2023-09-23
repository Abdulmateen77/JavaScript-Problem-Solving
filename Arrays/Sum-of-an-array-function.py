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


console.log(sumOfArguments(1, 2, 3, 4)); // Expected output: 10 (sum of individual arguments)
console.log(sumOfArguments([1, 2, 3, 4])); // Expected output: 10 (sum of elements in the array argument)

// Test case with multiple arguments, including arrays
console.log(sumOfArguments(1, [2, 3], 4)); // Expected output: 10 (sum of elements in individual arguments and array)

console.log(sumOfArguments([1])); // Expected output: 1 (only one element in the array)

console.log(sumOfArguments()); // Expected output: 0 (no arguments provided)

console.log(sumOfArguments([1, 2], [3, 4])); // Expected output: 10 (sum of elements in multiple arrays)

// Test case with negative numbers
console.log(sumOfArguments(-1, -2, -3)); // Expected output: -6 (sum of negative numbers)

console.log(sumOfArguments([-1, 2], [-3, 4])); // Expected output: 2 (sum of elements in multiple arrays with negative numbers)
