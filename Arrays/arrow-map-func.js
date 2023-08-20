// Define a function 'modify' that takes an array as input and performs specific operations on each element
let modify = (array) => {
    // Create a new array using the 'map' function
    let newArray = array.map(item => {
        // Check if the current item is prime using the 'isPrime' function
        if (isPrime(item)) {
            return item + 1; // Increment the item by 1 if it's prime
        } else {
            return item * 2; // Multiply the item by 2 if it's not prime
        }
    });
    return newArray; // Return the new array
}

// Define a function 'isPrime' to check if a number is prime
function isPrime(n) {
    if (n == 0 || n == 1) {
        return false; // 0 and 1 are not prime
    }

    // Check divisibility up to the square root of 'n'
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false; // If 'n' is divisible by any number, it's not prime
        }
    }

    return true; // 'n' is prime if not divisible by any number other than 1 and itself
}
