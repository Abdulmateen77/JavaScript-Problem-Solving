//Function to check if two address objects have equal properties (street, city, and zipCode)
function areEqual(address1, address2) {
  //Compare the properties of address1 and address2
  //Return true if all properties are equal, otherwise return false
  return address1.street === address2.street &&
         address1.city === address2.city &&
         address1.zipCode === address2.zipCode;
}

//Function to check if two address objects are the same (refer to the same memory location)
function areSame(address1, address2) {
  //Compare the memory references of address1 and address2
  //Return true if they reference the same object in memory, otherwise return false
  return address1 === address2;
}

//Test case 1: Objects with equal properties
var address1 = {
  street: '123 Main St',
  city: 'Cityville',
  zipCode: '12345'
};

var address2 = {
  street: '123 Main St',
  city: 'Cityville',
  zipCode: '12345'
};

console.log(areEqual(address1, address2)); // Output: true
console.log(areSame(address1, address2));  // Output: false (They are different objects)

// Test case 2: Objects with different street
var address3 = {
  street: '456 Elm St',
  city: 'Townsville',
  zipCode: '54321'
};

console.log(areEqual(address1, address3)); // Output: false (Street is different)
console.log(areSame(address1, address3));  // Output: false (They are different objects)

// Test case 3: Objects with different city
var address4 = {
  street: '123 Main St',
  city: 'Villageton',
  zipCode: '12345'
};

console.log(areEqual(address1, address4)); // Output: false (City is different)
console.log(areSame(address1, address4));  // Output: false (They are different objects)

// Test case 4: Objects with different zipCode
var address5 = {
  street: '123 Main St',
  city: 'Cityville',
  zipCode: '99999'
};

console.log(areEqual(address1, address5)); // Output: false (Zip code is different)
console.log(areSame(address1, address5));  // Output: false (They are different objects)

// Test case 5: Empty objects
var emptyAddress1 = {};
var emptyAddress2 = {};


// Call the areEqual function to check if the properties of newAddress and newAddress2 are equal
console.log(areEqual(newAddress, newAddress2)); // Output: true

// Call the areSame function to check if newAddress and newAddress2 are the same object in memory
console.log(areSame(newAddress, newAddress2)); // Output: false (They are different objects with equal properties)
