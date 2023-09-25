#Array from range function
function arrayFromRange(min,max){
  const output = [];
  for (let num = min; num <= max; num++)
    output.push(num);
  return output;
}
console.log(arrayFromRange(1,5));

