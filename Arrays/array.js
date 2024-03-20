//function try and catch error handing
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


