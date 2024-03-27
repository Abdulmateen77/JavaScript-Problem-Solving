//Function to handle errors

function errorHandler(x) {
    try {
        //Try to get the value using the getX function
        let num = getX(x);
        return num; // Return the value if successful
    } catch (error) {
        //Log the error message
        console.error("An error occurred:", error.message); 
        return null; //Return null to indicate error
    }
}

//Function to get the value of x
function getX(x) {
    if (x == 5) {
        return new Error("Error Occurred"); // Return an Error object with a message if x is 5
    }
    return x; //Return x if x is not 5
}


// Test cases for errorHandler function
console.log(errorHandler(3)); // Output: 3 (no error)
console.log(errorHandler(5)); // Output: null (error occurred)

// Test cases for getX function
console.log(getX(3)); // Output: 3
console.log(getX(5)); // Output: Error: Error Occurred

// Test case with try-catch block
try {
    console.log(errorHandler(3)); // Output: 3 (no error)
    console.log(errorHandler(5)); // Output: null (error occurred)
} catch (error) {
    console.error("Caught an error:", error.message);
}
