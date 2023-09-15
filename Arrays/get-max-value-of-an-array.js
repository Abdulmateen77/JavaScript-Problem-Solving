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
