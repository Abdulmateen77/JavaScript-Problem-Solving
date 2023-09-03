// Address object representing a physical address
let address = {
  street: "Oxford street",
  city: "London",
  zipCode: "W1C 1DL",
}

// Function to display the properties of an address object
function showAddress(address) {
  // Loop through the properties of the address object
  for (key in address) {
    console.log(key, ":", address[key]); // Output the property and its value
  }
}

// Display the address using the showAddress function
console.log(showAddress(address));

// Factory Function to create address objects
function createAddress(street, city, zipCode) {
  // Return a new address object with the specified properties
  return {
    street,
    city,
    zipCode
  }
}

// Create a new address object using the factory function
let newAddress = createAddress("Oxford Street", "London", "W1C 1DL");
console.log(newAddress);

// Function to check if two address objects have the same properties
function areEqual(address1, address2) {
  return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}

// Function to check if two address objects reference the exact same object in memory
function areSame(address1, address2) {
  return address1 === address2;
}

// Example usage of the areEqual and areSame functions
let newAddress2 = createAddress("Oxford Street", "London", "W1C 1DL");
console.log(areEqual(newAddress, newAddress2)); // Check if properties are equal
console.log(areSame(newAddress, newAddress2));  // Check if references are the same
