function maxMinDifference(arr) {
    // You only need to implement this function.

    // Approach 1 
    // Initialize min and max variables with the initial values of positive and negative infinity respectively
    let min = +Infinity;
    let max = -Infinity;
    
    // Iterate through the array
    for (var i = 0; i < arr.length; i++) {
        // Update min and max variables based on the current array element
        min = Math.min(arr[i], min);
        max = Math.max(arr[i], max);
    }
    
    // Calculate and return the difference between the maximum and minimum values
    return max - min;

    // Approach 2 (Only valid since the length of array is at least 1)
}

// Test the function with a sample test case
if (maxMinDifference([9, 1, 3, 4]) !== 8)
    console.log("Test fails: Expected 8 for input arr = [9, 1, 3, 4]");
else
    console.log("Sample test case for input arr = [9, 1, 3, 4] passed!");

// Export the function for external use
module.exports = maxMinDifference;
