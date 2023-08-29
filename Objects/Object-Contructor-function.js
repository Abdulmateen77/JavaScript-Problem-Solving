// Object Contructor function
function Address(street, city, zipCode){
  this.street = street,
  this.city = city,
  this.zipCode = zipCode
}

let newAddress = new Address("Baker street", "London", "W1U 3AA")
let newAddress2 = new Address("Baker street", "London", "W1U 3AA")

console.log(newAddress, newAddress2)
