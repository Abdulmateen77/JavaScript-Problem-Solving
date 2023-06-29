// Function to find the length of the longest word in a string.
function findLongestWordLength(str) {
  let longest = 0; // Variable to store the length of the longest word.
  let newStr = str.split(' '); // Split the string into an array of words.

  for (let i = 0; i < newStr.length; i++) {
    // Iterate through each word in the array.

    if (newStr[i].length > longest) {
      // If the length of the current word is greater than the current longest length,
      // update the longest length to the length of the current word.
      longest = newStr[i].length;
    }
  }

  return longest; // Return the length of the longest word.
}

// Test case to check the functionality of the findLongestWordLength function.
if (findLongestWordLength("I live in India") !== 5) {
  console.log("Test fails: Expected 5 for input str = 'I live in India'");
} else {
  console.log("Sample test case for input str = 'I live in India' passed!");
}
