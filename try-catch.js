// Function to handle errors
function errorHandler(x) {
    try {
        // Try to get the value using the getX function
        let num = getX(x);
        return num; // Return the value if successful
    } catch (error) {
        console.error("An error occurred:", error.message); // Log the error message
        return null; // Return null to indicate error
    }
}

// Function to get the value of x
function getX(x) {
    if (x == 5) {
        return new Error("Error Occurred"); // Return an Error object with a message if x is 5
    }
    return x; // Return x if x is not 5
}
