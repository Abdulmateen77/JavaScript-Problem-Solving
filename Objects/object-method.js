// Define a function named methodOnObject with parameters name, age, college, city, and country.
function methodOnObject(name, age, college, city, country) {
  // You need to implement this function.

  // Create a person object with properties name, age, college, city, and country.
  let person = {
    name: name,
    age: age,
    college: college,
    city: city,
    country: country,

    // Define a method named getCity within the person object.
    getCity: function() {
      // Return a string that includes the person's name and the city they live in.
      return this.name + " lives in " + this.city + ".";
    }
  };

  // Return the created person object.
  return person;
}

// Perform a sample test case.
if (methodOnObject("Abhinav", 22, "IIT Patna", "Patna", "India").getCity() === "Abhinav lives in Patna.") {
  // Log a success message if the test case passes.
  console.log("Sample test case 1 passed!");
} else {
  // Log a failure message if the test case fails.
  console.log("Sample test case 1 failed!");
}
