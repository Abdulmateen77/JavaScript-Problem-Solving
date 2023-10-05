// Function to check if two address objects have equal properties (street, city, and zipCode)
function areEqual(address1, address2) {
  // Compare the properties of address1 and address2
  // Return true if all properties are equal, otherwise return false
  return address1.street === address2.street &&
         address1.city === address2.city &&
         address1.zipCode === address2.zipCode;
}

// Function to check if two address objects are the same (refer to the same memory location)
function areSame(address1, address2) {
  // Compare the memory references of address1 and address2
  // Return true if they reference the same object in memory, otherwise return false
  return address1 === address2;
}

// Create two address objects for testing
var newAddress = {
  street: '123 Main St',
  city: 'Cityville',
  zipCode: '12345'
};

var newAddress2 = {
  street: '123 Main St',
  city: 'Cityville',
  zipCode: '12345'
};

// Call the areEqual function to check if the properties of newAddress and newAddress2 are equal
console.log(areEqual(newAddress, newAddress2)); // Output: true

// Call the areSame function to check if newAddress and newAddress2 are the same object in memory
console.log(areSame(newAddress, newAddress2)); // Output: false (They are different objects with equal properties)
