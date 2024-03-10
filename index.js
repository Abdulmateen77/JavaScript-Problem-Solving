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


//sum of multiples function

function sum(limit){
  let sum = 0;
  
  for(let i = 0; i <= limit; i++){
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
    
  return sum;
  }
}

console.log(sum(10))
//Function to show prime numbers up to a given number 'num'
function showPrime(num) {
  // Iterate through numbers from 2 to 'num'
  for (let number = 2; number <= num; number++) {
    // Check if the current number is prime using the 'isPrime' function
    if (isPrime(number)) {
      // If it's prime, print the prime number to the console
      console.log(number);
    }
  }
}

// Function to check if a number is prime
function isPrime(number) {
  //Iterate through potential factors from 2 to 'number - 1'
  for (let factor = 2; factor < number; factor++) {
    // If 'number' is divisible by 'factor' with no remainder, it's not prime
    if (number % factor === 0) {
      return false;
    }
  }
  // If no factors were found, 'number' is prime
  return true;
}

// Example usage: Show prime numbers up to 11 and print them
console.log(showPrime(11));

//Object with read only property
let circle = {
  radius: 2,
    get area(){
      return Math.PI * this.radius * this.radius;
    } 
};
