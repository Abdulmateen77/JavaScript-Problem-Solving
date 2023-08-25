// Function to determine if the given input is an alphabet character
function isAlphabet(X) {
    if (checkAlphabet(X)) {
        return "Yes"; // Return "Yes" if X is an alphabet character
    } else {
        throw "Not Alphabet"; // Throw an error if X is not an alphabet character
    }
}

// Function to check if a given character is an alphabet
function checkAlphabet(X) {
    // Get the ASCII code of the character
    let n = X.charCodeAt(0);

    // Determine if the character's ASCII code falls within the range of uppercase or lowercase letters
    let strStartsWithALetter = (n >= 65 && n < 91) || (n >= 97 && n < 123);

    // Check if the character starts with an alphabet
    if (strStartsWithALetter) {
        // Yes, it starts with an alphabet
        return true;
    } else {
        // No, it doesn't start with an alphabet
        return false;
    }
}
