//Array from range function
function arrayFromRange(min,max){
  const output = [];
  for (let num = min; num <= max; num++)
    output.push(num);
  return output;
}
console.log(arrayFromRange(1,5));





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


