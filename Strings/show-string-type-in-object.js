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
