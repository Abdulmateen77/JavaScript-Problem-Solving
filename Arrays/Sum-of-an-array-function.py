function sumOfArugments(...items){
  if(items.length == 1 && Array.isArray(items[0]))
    items = [...items[0]]
  return items.reduce((a,b) => a+b);
  
}

console.log(sumOfArugments([1,2,3,4]))
