/**
 * @param {number[]} arr - The array of numbers
 * @return {number[]} - The new array with each element multiplied by 3
 */
function multiplyThree(arr) {
  // Using the map method to iterate over the array and multiply each element by 3
  const arrTrippled = arr.map((item) => item * 3);
  return arrTrippled;
}

if (
  JSON.stringify(multiplyThree([1, 2, 3])) !== JSON.stringify([3, 6, 9])
) {
  console.log("Test fails: Expected [3, 6, 9] for input arr = [1, 2, 3]");
} else {
  console.log("Sample test case for input arr = [1, 2, 3] passed!");
}
