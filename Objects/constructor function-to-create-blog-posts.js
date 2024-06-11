// Constructor function for creating Post objects
function Post(title, body, author) {
  // Initialize properties for the Post object
  this.title = title; // Title of the post
  this.body = body; // Body content of the post
  this.author = author; // Author of the post
  this.views = 0; // Initial views count
  this.comments = []; // Array to store comments
  this.isLive = false; // Indicates if the post is live or not
}

// Create a new instance of the Post object
let Blog = new Post("A", "B", "C");

console.log(Blog); // Output the newly created Post object


// Test cases for the Post constructor function

// Create a new instance of the Post object with different values
const post1 = new Post("Title 1", "Body 1", "Author 1");
const post2 = new Post("Title 2", "Body 2", "Author 2");

// Output the created instances to the console
console.log(post1);
console.log(post2);

// Test if the properties are correctly initialized
console.log(post1.title); // Output: "Title 1"
console.log(post2.body); // Output: "Body 2"
console.log(post1.author); // Output: "Author 1"

// Test if the initial view count is set to 0
console.log(post2.views); // Output: 0

// Test if the comments array is initially empty
console.log(post1.comments); // Output: []

// Test if the initial status of a post is not live
console.log(post2.isLive); // Output: false
