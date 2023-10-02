// function to check properties of two object
function areEqual(address1, address2){
  return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
    
}
//function to check if the objects are same
function areSame (address1, address2){
   return address1 === address2;
}
console.log(areEqual(newAddress, newAddress2))
console.log(areSame(newAddress, newAddress2))
