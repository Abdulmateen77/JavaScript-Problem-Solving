// Define an array of numbers
const numbers = [1, 2, 3, 2];

// Function to count the occurrences of a search element in an array
function countOccurrence(array, searchElement) {
  // Uncommented code below is an alternative way to count occurrences using a loop
  // Initialize a variable to count the occurrences
  // let element = 0;
  
  // Iterate through the array and count occurrences of the search element
  // for (let item of array) {
  //   if (item === searchElement) {
  //     element++;
  //   }
  // }
  
  // Return the count of occurrences
  // return element;

  // With the reduce function, count occurrences of the search element in the array
  return array.reduce((accumulator, current) => {
    // Check if the current element matches the search element and assign 1 or 0 accordingly
    const occurrence = (current === searchElement) ? 1 : 0;
    
    // Add the occurrence to the accumulator
    return accumulator + occurrence;
  }, 0);
}

// Call the countOccurrence function with the example array and search element and print the result
console.log(countOccurrence(numbers, 2)); // Expected output: 2


//Test case 1: Count occurrences of an element that exists in the array
console.log(countOccurrence([1, 2, 3, 2, 4, 2], 2)); // Expected output: 3

//Test case 2: Count occurrences of an element that does not exist in the array
console.log(countOccurrence([1, 3, 5, 7], 2)); // Expected output: 0

// Test case 3: Count occurrences of an element in an empty array
console.log(countOccurrence([], 2)); // Expected output: 0

// Test case 4: Count occurrences of an element in an array of identical elements
console.log(countOccurrence([2, 2, 2, 2], 2)); // Expected output: 4

// Test case 5: Count occurrences of an element when the array has only one element
console.log(countOccurrence([42], 42)); // Expected output: 1
