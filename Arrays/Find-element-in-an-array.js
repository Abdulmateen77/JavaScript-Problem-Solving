// Function to check if a searchElement exists in the given array
function includes(array, searchElement) {
  // Loop through each element in the array
  for (let element of array) {
    // Check if the current element is equal to the searchElement
    if (element === searchElement) {
      // If found, return true
      return true;
    }
  }
  // If the loop completes without finding the element, return false
  return false;
}

// Example usage: an array of numbers
const numbers = [1, 2, 3];

// Call the includes function to check if 1 exists in the array
console.log(includes(numbers, 1)); // Expected output: true
