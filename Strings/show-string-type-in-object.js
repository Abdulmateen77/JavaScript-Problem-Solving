// Function to display properties of an object that have string values
function showProperties(obj) {
  // Iterate over each property in the object
  for (let prop in obj) {
    // Check if the type of the property's value is 'string'
    if (typeof obj[prop] === 'string') {
      // If it's a string, log the property name and its value
      console.log(prop, obj[prop]);
    }
  }
}

// Define an object called 'movie'
const movie = {
  title: 'a',
  year: 2022,
  director: "pragy"
};

// Call the showProperties function with the 'movie' object
console.log(showProperties(movie));


// Define an object with various data types
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  job: 'Engineer',
  email: 'john@example.com'
};

// Test case 1: Display properties with string values in the 'person' object
console.log("Test Case 1:");
showProperties(person);

// Define an object with all number values
const numbers = {
  one: 1,
  two: 2,
  three: 3
};

// Test case 2: Display properties with string values in the 'numbers' object
console.log("\nTest Case 2:");
showProperties(numbers);

// Define an empty object
const emptyObject = {};

// Test case 3: Display properties with string values in an empty object
console.log("\nTest Case 3:");
showProperties(emptyObject);

// Define an object with boolean and string values
const mixedData = {
  name: 'Alice',
  age: 25,
  isActive: true,
  email: 'alice@example.com'
};

// Test case 4: Display properties with string values in the 'mixedData' object
console.log("\nTest Case 4:");
showProperties(mixedData);
