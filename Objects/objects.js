// Address object
let address = {
  street : "Oxford street",
  city : "London",
  zipCode: "W1C 1DL",
}
// Function to show address
function showAddress (address){
  for (key in address)
    console.log(key, ":", address[key]);
}

console.log(showAddress(address))

// Factory Function to create objects
function createAddress (street, city, zipCode){
  return {
    street,
    city,
    zipCode
  }
}

let addres = createAddress("oxford street","london", "W1C 1DL");
console.log(addres)

// Object Contructor function
function Address(street, city, zipCode){
  this.street = street,
  this.city = city,
  this.zipCode = zipCode
}

let newAddress = new Address("Baker street", "London", "W1U 3AA")
let newAddress2 = new Address("Baker street", "London", "W1U 3AA")

console.log(newAddress, newAddress2)
// function to check properties of two object
function areEqual(address1, address2){
  return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
    
}
// function to check if the objects are same
function areSame (address1, address2){
   return address1 === address2;
}
console.log(areEqual(newAddress, newAddress2))
console.log(areSame(newAddress, newAddress2))

//Object to create blog post
let blogPost = {
  title: "A",
    body: "B",
    author: "C",
    views: 10,
    comments: [{author: "",body:""}],
    isLive: true
}

console.log(blogPost)


// constructor function to create blog posts
function Post (title,body,author){
  this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}

let Blog = new Post("A","B", "C");
console.log(Blog)
