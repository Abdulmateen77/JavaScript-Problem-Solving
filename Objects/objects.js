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


