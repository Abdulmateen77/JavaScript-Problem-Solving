//Function to determine if the given input is an alphabet character
function isAlphabet(X) {
    if (checkAlphabet(X)) {
        return "Yes"; //Return "Yes" if x is an alphabet character
    } else {
        throw "Not Alphabet"; //Throw an error if x is not an alphabet character
    }
}

//Function to check if a given character is an alphabet
function checkAlphabet(X) {
    //Get the ASCII code of the character
    let n = X.charCodeAt(0);

    //Determine if the character's ASCII code falls within the range of uppercase or lowercase letters
    let strStartsWithALetter = (n >= 65 && n < 91) || (n >= 97 && n < 123);

    //Check if the character starts with an alphabet
    if (strStartsWithALetter) {
        //Yes, it starts with an alphabet
        return true;
    } else {
        //No, it doesn't start with an alphabet
        return false;
    }
}


//Test cases for isAlphabet function
console.log(isAlphabet('A')); //Output: Yes (uppercase alphabet)
console.log(isAlphabet('z')); //Output: Yes (lowercase alphabet)
console.log(isAlphabet('5')); //Output: Not Alphabet (non-alphabet character)
console.log(isAlphabet('@')); //Output: Not Alphabet (non-alphabet character)
console.log(isAlphabet(''));  //Output: Not Alphabet (empty string)


//Test cases for checkAlphabet function
console.log(checkAlphabet('A')); //Output: true (uppercase alphabet)
console.log(checkAlphabet('z')); //Output: true (lowercase alphabet)
console.log(checkAlphabet('5')); //Output: false (non-alphabet character)
console.log(checkAlphabet('@')); //Output: false (non-alphabet character)
console.log(checkAlphabet(''));  //Output: false (empty string)
