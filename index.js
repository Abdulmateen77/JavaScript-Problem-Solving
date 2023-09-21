//Shows odd and even numbers
function showNumbers(num){
let i = 0;
while (i <= num){
const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
console.log (i,message);
  i += 1;
}
}
 console.log(showNumbers(10))


//If array counts Truthy values
function countTruthy(array){
  let count = 0;
  for (let value of array)
    if(value)
     count++;
  return count;
  
}

console.log(countTruthy([1,2,3]))

// function to show string type in object
function showProperties(obj){
  for (let prop in obj)
    if (typeof obj[prop] === 'string') 
      console.log (prop, obj[prop])
}

 const movie = {
   title: 'a',
   year: 2022,
   director: "pragy"
 };
 console.log(showProperties(movie))

// sum of multiples function

function sum(limit){
  let sum = 0;
  
  for(let i = 0; i <= limit; i++){
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
    
  return sum;
  }
}

console.log(sum(10))




// Object with read only property
let circle = {
  radius: 2,
    get area(){
      return Math.PI * this.radius * this.radius;
    } 
};
