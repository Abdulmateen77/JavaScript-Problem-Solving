/**
 * @param {number[]} ages - The array of ages to check for voting eligibility
 * @return {number[]} - The array of ages that are eligible to vote
 */
function canVote(ages) {
  // Using the filter method to create a new array with ages >= 18
  const voterCheck = ages.filter((personAge) => personAge >= 18);

  // Returning the new array with ages that are eligible to vote
  return voterCheck;
}

// Testing the function with a sample test case
if (JSON.stringify(canVote([32, 33, 16, 40])) !== JSON.stringify([32, 33, 40])) {
  console.log("Test fails: Expected [32, 33, 40] for input ages = [32, 33, 16, 40]");
} else {
  console.log("Sample test case for input arr = [32, 33, 16, 40] passed!");
}
