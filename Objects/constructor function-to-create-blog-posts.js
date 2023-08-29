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
