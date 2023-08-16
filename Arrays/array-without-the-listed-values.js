// Define a function called removeListedValues that takes two parameters: arr (an array) and without (an array of values to be removed from arr)
function removeListedValues(arr, without) {
    // Use the filter() method on the input array arr
    // Filter out the items that are included in the without array
    let arr1 = arr.filter((item) => {
        // Check if the current item is NOT included in the without array
        if (!without.includes(item)) {
            // Return true to keep the item in the filtered array
            return true;
        } else {
            // Return false to exclude the item from the filtered array
            return false;
        }
    });

    // Return the filtered array arr1
    return arr1;
}

// Example usage:
let originalArray = [1, 2, 3, 4, 5];
let valuesToRemove = [2, 4];

// Call the removeListedValues function with the originalArray and valuesToRemove
let newArray = removeListedValues(originalArray, valuesToRemove);

// Print the original and new arrays
console.log("Original Array:", originalArray);
console.log("New Array:", newArray);
