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

// calculate grades
function calculateGrade(marks){
  const avg = calculateAverage(marks)

  if (avg <= 59) return "F";
  else if (avg <= 69) return "D";
  else if (avg <= 79) return "C";
  else if (avg <= 89) return "B";
  else if (avg <= 100) return "A";
  
}

// calculate average
function calculateAverage(array){
  let sum = 0;
  
  for (let value of array)
    sum += value;
  return sum / array.length; 
}

const mar = [99,80,80];
console.log(calculateGrade(mar));

//show prime numbers function
function showPrime(num){
  for (let number = 2; number <= num; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number){
      for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
          return false
       return true;
}

console.log(showPrime(11));