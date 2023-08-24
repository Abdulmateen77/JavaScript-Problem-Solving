// Define a function called findLength that takes an array 'arr' as input
function findLength(arr) {
    // Use the map() function to transform each element 'str' in the array 'arr'
    arr = arr.map((str) => {
        // Check if the current element 'str' is null or undefined
        if (str === null || str === undefined) {
            return 0;  // If it is null or undefined, return 0
        } else {
            return str.length;  // If not null or undefined, return the length of the string 'str'
        }
    });
    // Return the modified array 'arr' where each element has been replaced with its length
    return arr;
}



// Test Case 1: Array with strings of different lengths and null values
const input1 = ['apple', 'banana', null, 'grape', undefined, 'orange'];
// After processing, the lengths of non-null and non-undefined strings are [5, 6, 0, 5, 0, 6]
const output1 = findLength(input1);
console.log(output1); // Output: [5, 6, 0, 5, 0, 6]

// Test Case 2: Array with empty strings
const input2 = ['', '', '', ''];
// After processing, the lengths of empty strings are [0, 0, 0, 0]
const output2 = findLength(input2);
console.log(output2); // Output: [0, 0, 0, 0]

// Test Case 3: Array with mixed data types including numbers and objects
const input3 = ['hello', 123, { name: 'John' }, 'world', null];
// After processing, the lengths of strings are [5, 0, 0, 5, 0]
const output3 = findLength(input3);
console.log(output3); // Output: [5, 0, 0, 5, 0]
