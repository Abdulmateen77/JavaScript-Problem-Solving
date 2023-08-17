//Array from range function
function arrayFromRange(min,max){
  const output = [];
  for (let num = min; num <= max; num++)
    output.push(num);
  return output;
}
function isAlphabet(X) {
      if (checkAlphabet(X)){
            return "Yes";
      } else {
            throw "Not Alphabet";
      }
};

function checkAlphabet(X) {

	let n = X.charCodeAt(0);

	let strStartsWithALetter = (n>=65 && n < 91) || ( n>=97 && n<123);

	

// You can Google about what is ASCII code to know more about

	// why are we using numbers like 65, 91, 97 & 123

	

if (strStartsWithALetter) {

	// Yes, it starts with an alphabet

	return true;

} else {

	// No, it doesnt start with an alphabet

	return false;

} 

}

module.exports = isAlphabet;
/* 
Crio Methodology

Milestone 1: Understand the problem clearly
1. Ask questions & clarify the problem statement clearly.
2. Take an example or two to confirm your understanding of the input/output

Milestone 2: Finalize approach & execution plan
1. Understand what type of problem you are solving and see if you can recollect solving similar problems in the past
      a. Obvious logic (this would only test ability to convert logic to code)
      b. Figuring out logic
      c. Knowledge of specific algorithm, data structure or pattern
      d. Knowledge of specific domain or concepts
      e. Mapping real world into abstract concepts/data structures
2. Brainstorm multiple ways to solve the problem and pick one based on the TC/SC requirements
3. Get to a point where you can explain your approach to a 10 year old

Milestone 3 : Come up with an Instruction Manual for a 10 year old
1. Take a stab at the high-level logic & write it down like a detailed Instruction Manual for a 10 Year old where each line of the manual can be expanded into a logical line(s) of code.
2. Try to offload logic out of the main section as much as possible by delegating to functions.

Milestone 4: Code by expanding your 10 Year Olds "Instruction Manual
1. Run your code snippets at every logical step to test correctness (Helps avoid debugging larger pieces of code later)
2. Make sure you name the variables, functions clearly.
3. Use libraries as much as possible

Milestone 5: Prove that your code works using custom test cases
1. Make sure you check boundary conditions and other test cases you noted in Milestone 1
      a. If compiler is not available, dry run your code on a whiteboard or paper
2. Suggest optimizations if applicable during interviews
*/

console.log(arrayFromRange(1,5));

//Find element in an array
function includes( array, searchElement){
  for (let element of array) 
    if (element === searchElement)
      return true;
  return false
}

const numbers = [1,2,3];
console.log(includes( numbers , 1));



// Function to check the occurence of a number in an array
const number = [1,2,3,2]

function countOccurence(array, searchElement){
  //let element = 0;
  //for (let item of array)
    //if(item === searchElement)
      //element++;
  //return element;

  //with reduce function
  return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0
    return accumulator + occurence;
  }, 0);
}

console.log(countOccurence(number, 2))


// Function to get max value of an array
function getMax(array){
  if (array.length === 0) return undefined;
  //let max = array[0];
  //for(let element = 1; element < array.length; element++)
    //if (array[element] > max)
      //max = array[element];
  
  //return max;

  //With reduce method
  return array.reduce ((a,b) => (a>b) ? a :b);
}

console.log(getMax([1,2,77,4,5]))

//Sorting with array of objects
const movies = [
  {title: 'a', year: 2018, rating: 4.5},
  {title: 'b', year: 2018, rating: 4.7},
  {title: 'c', year: 2018, rating: 3},
  {title: 'd', year: 2017, rating: 4.5},
]

const title = movies
  .filter(m => m.year === 2018 && m.rating >=4)
  .sort((a,b) => a.rating -b.rating)
  .reverse()
  .map(m => m.title)

console.log(title);

// Sum of an array function
function sumOfArugments(...items){
  if(items.length == 1 && Array.isArray(items[0]))
    items = [...items[0]]
  return items.reduce((a,b) => a+b);
  
}

console.log(sumOfArugments([1,2,3,4]))

// function try and catch error handing
function countOccurence(array, searchElement){

  //with reduce function
  if ( !Array.isArray(array) )
    throw new Error ('value is not a array');
  return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0
    return accumulator + occurence;
  }, 0);
}
try{
const number = [1,2,3,2];
console.log(countOccurence(number,3))
}

catch (e){
  console.log(e.message)
}


//Moving elements in an array
const numbers = [1,2,3,4];

const output = move(numbers, 5, 2);

function move (array, index, offset){ 
  const poistion = index + offset;
  if (poistion >= array.length || poistion < 0){
    console.error('Invalid offset');
    return
  }
  const output = [...array]
  const element = output.splice(index,1)[0];
  output.splice(poistion,0,element);
  return output;
}

console.log(output)
