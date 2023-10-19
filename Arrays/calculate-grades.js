//Function to calculate grades based on average marks
function calculateGrade(marks) {
  //Calculate the average marks using the calculateAverage function
  const avg = calculateAverage(marks);

  //Determine the grade based on the average
  if (avg <= 59) return "F";
  else if (avg <= 69) return "D";
  else if (avg <= 79) return "C";
  else if (avg <= 89) return "B";
  else if (avg <= 100) return "A";
}

// Function to calculate the average of an array of marks
function calculateAverage(array) {
  let sum = 0;

  // Calculate the sum of all values in the array
  for (let value of array) {
    sum += value;
  }

  // Calculate and return the average
  return sum / array.length;
}

// Example array of marks
const mar = [99, 80, 80];

// Calculate and print the grade for the example marks
console.log(calculateGrade(mar));


// Test case 1: Average marks that result in an 'A' grade
const test1Marks = [90, 92, 95];
const test1ExpectedGrade = 'A';
const test1Result = calculateGrade(test1Marks);

console.log('Test Case 1:');
console.log(`Input Marks: ${test1Marks}`);
console.log(`Expected Grade: ${test1ExpectedGrade}`);
console.log(`Actual Grade: ${test1Result}`);
console.log(`Test Passed: ${test1ExpectedGrade === test1Result}`);
console.log('-------------------------------------');

// Test case 2: Average marks that result in a 'C' grade
const test2Marks = [70, 75, 78];
const test2ExpectedGrade = 'C';
const test2Result = calculateGrade(test2Marks);

console.log('Test Case 2:');
console.log(`Input Marks: ${test2Marks}`);
console.log(`Expected Grade: ${test2ExpectedGrade}`);
console.log(`Actual Grade: ${test2Result}`);
console.log(`Test Passed: ${test2ExpectedGrade === test2Result}`);
console.log('-------------------------------------');
