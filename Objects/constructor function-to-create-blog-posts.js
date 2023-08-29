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
