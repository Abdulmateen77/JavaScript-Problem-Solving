// Function to merge the given strings and return the result
function mergedString(str) {
  // Destructuring assignment to extract the elements from the array
  const [a, b, c] = str;

  // Concatenating the strings with spaces in between
  let merge = a + " " + b + " " + c;

  return merge;
}

// Testing the function with a sample test case
if (mergedString(['code', 'for', 'good', 'intent']) !== 'code for good')
  console.log("Test fails: Expected 'code for good' for input str = ['code', 'for', 'good', 'intent']");
else
  console.log("Sample test case for input str = ['code', 'for', 'good', 'intent'] passed!");
