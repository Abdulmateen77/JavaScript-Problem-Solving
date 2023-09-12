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
