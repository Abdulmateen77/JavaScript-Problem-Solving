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
