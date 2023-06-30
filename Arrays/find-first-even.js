function firstEven(arr) {
  // Using the find method to search for the first even number in the array
  // The find method takes a callback function that is executed for each element in the array
  // The callback function checks if the current element is divisible by 2 (even)
  // If an even number is found, it is returned by the find method
  // If no even number is found, find returns undefined
  return arr.find((item) => item % 2 == 0);
}

// Testing the function with a sample test case
if (firstEven([1, 2, 3, 2, 3, 2]) != 2) {
  console.log("Test fails: Expected 2 for input arr = [1, 2, 3, 2, 3, 2]");
} else {
  console.log("Sample test case for input arr = [1, 2, 3, 2, 3, 2] passed!");
}
