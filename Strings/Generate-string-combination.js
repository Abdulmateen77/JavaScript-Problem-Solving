// Function to generate combinations of elements from two arrays.
function generateCombinations(arr1, arr2) {
  
  let newArray = []; // Array to store the generated combinations.
  
  // Nested loops to iterate through each element of arr1 and arr2.
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // Concatenate the current elements from arr1 and arr2 and add it to the newArray.
      newArray.push(arr1[i] + arr2[j]);
    }
  }
  
  return newArray; // Return the array with generated combinations.
}

// Test case to check the functionality of the generateCombinations function.
if (JSON.stringify(generateCombinations(['a', 'c', 'e'], ['b', 'd', 'f'])) !== JSON.stringify(['ab', 'ad', 'af', 'cb', 'cd', 'cf', 'eb', 'ed', 'ef'])) {
  console.log("Test fails: Expected ['ab', 'ad', 'af', 'cb', 'cd', 'cf', 'eb', 'ed', 'ef'] for input arr1 = ['a', 'c', 'e'] and arr2 = ['b', 'd', 'f']");
} else {
  console.log("Sample test case for input arr1 = ['a', 'c', 'e'] and arr2 = ['b', 'd', 'f'] passed!");
}
