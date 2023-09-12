//Array from range function
function arrayFromRange(min,max){
  const output = [];
  for (let num = min; num <= max; num++)
    output.push(num);
  return output;
}
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


