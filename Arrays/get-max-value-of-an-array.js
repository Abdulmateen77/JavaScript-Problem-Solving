// Function to find the maximum element in an array
function getMax(array) {
  // Check if the input array is empty
  if (array.length === 0) return undefined;

  // Uncommented code below is an alternative way to find the maximum element using a loop
  // Initialize the maximum value with the first element of the array
  // let max = array[0];
  
  // Iterate through the array to find the maximum element
  // for (let element = 1; element < array.length; element++) {
  //   if (array[element] > max) {
  //     max = array[element];
  //   }
  // }

  // Return the maximum value found using the loop
  // return max;

  // With the reduce method, find the maximum element in the array
  return array.reduce((a, b) => (a > b) ? a : b);
}

// Call the getMax function with an example array and print the result
console.log(getMax([1, 2, 77, 4, 5]));

// Test case 1: Regular array with positive integers
console.log(getMax([1, 2, 77, 4, 5])); // Expected output: 77

// Test case 2: Array with a single element
console.log(getMax([42])); // Expected output: 42

// Test case 3: Array with negative integers
console.log(getMax([-5, -2, -8, -1, -4])); // Expected output: -1

// Test case 4: Array with mixed positive and negative integers
console.log(getMax([-5, 10, -8, 15, -4])); // Expected output: 15

// Test case 5: Empty array
console.log(getMax([])); // Expected output: undefined


