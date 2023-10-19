//Function to filter an array of objects based on the city property
function filterByCity(arr) {
    //Create an array to store the filtered results
    const resultArr = arr.filter((item) => {
        //Extract the city property and convert it to lowercase
        let { city } = item;
        city = city.toLowerCase();
        
        //Check if the city is "bangalore" or "hyderabad"
        if (city === "bangalore" || city === "hyderabad") {
            return true; // Include the item in the filtered array
        } else {
            return false; // Exclude the item from the filtered array
        }
    });

    return resultArr; // Return the filtered array
}

// Test Case 1: Filtering out items with city other than "bangalore" and "hyderabad"
const input1 = [
    { city: "bangalore", name: "John" },
    { city: "chennai", name: "Alice" },
    { city: "hyderabad", name: "Bob" },
    { city: "mumbai", name: "Eve" }
];
console.log(filterByCity(input1)); 
// Output: [ { city: 'bangalore', name: 'John' }, { city: 'hyderabad', name: 'Bob' } ]

// Test Case 2: All items have city as "bangalore" or "hyderabad"
const input2 = [
    { city: "bangalore", name: "Alex" },
    { city: "bangalore", name: "Emma" },
    { city: "hyderabad", name: "Daniel" }
];
console.log(filterByCity(input2)); 
// Output: [ { city: 'bangalore', name: 'Alex' }, { city: 'bangalore', name: 'Emma' }, { city: 'hyderabad', name: 'Daniel' } ]

// Test Case 3: Empty input array
const input3 = [];
console.log(filterByCity(input3)); 
// Output: []

// Test Case 4: Filtering out items with mixed-case cities
const input4 = [
    { city: "Bangalore", name: "Sophia" },
    { city: "Hyderabad", name: "Liam" },
    { city: "CHENNAI", name: "Olivia" }
];
console.log(filterByCity(input4)); 
// Output: [ { city: 'Bangalore', name: 'Sophia' }, { city: 'Hyderabad', name: 'Liam' } ]
