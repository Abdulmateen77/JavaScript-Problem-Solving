// Function to filter an array of objects based on the city property
function filterByCity(arr) {
    // Create an array to store the filtered results
    const resultArr = arr.filter((item) => {
        // Extract the city property and convert it to lowercase
        let { city } = item;
        city = city.toLowerCase();
        
        // Check if the city is "bangalore" or "hyderabad"
        if (city === "bangalore" || city === "hyderabad") {
            return true; // Include the item in the filtered array
        } else {
            return false; // Exclude the item from the filtered array
        }
    });

    return resultArr; // Return the filtered array
}
