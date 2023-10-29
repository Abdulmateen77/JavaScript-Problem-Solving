//Object Constructor Function
function Address(street, city, zipCode) {
  // Create an instance of the Address object with the provided properties
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

//Create new instances of the Address object using the constructor function
let newAddress = new Address("Baker street", "London", "W1U 3AA");
let newAddress2 = new Address("Baker street", "London", "W1U 3AA");

//Output the created instances to the console
console.log(newAddress);
console.log(newAddress2);

