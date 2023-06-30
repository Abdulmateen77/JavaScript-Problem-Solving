function maxCapacityType(arr) {
// You only need to implement this function.
let maxCap = 0;
let carType = "";

// Iterate through the array of cars
for (let i = 0; i < arr.length; i++) {
    // Check if the current car's capacity is greater than the maximum capacity
    if (maxCap < arr[i].capacity) {
        // Update the maximum capacity and car type accordingly
        maxCap = arr[i].capacity;
        carType = arr[i].type;
    }
}

// Return the car type with the maximum capacity
return carType;


// Test the function with a sample test case
if (maxCapacityType([{color: 'Red', type: 'Station Wagon', capacity: 5}, {color: 'Black', type: 'Sedan', capacity: 4}]) !== 'Station Wagon')
console.log("Test fails: Expected 'Station Wagon' for input arr = [{color: 'Red', type: 'Station Wagon', capacity: 5}, {color: 'Black', type: 'Sedan', capacity: 4}]");
else
console.log("Sample test case for input arr = [{color: 'Red', type: 'Station Wagon', capacity: 5}, {color: 'Black', type: 'Sedan', capacity: 4}] passed!");
