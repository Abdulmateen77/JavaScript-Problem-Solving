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
