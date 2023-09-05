// Function to calculate grades based on average marks
function calculateGrade(marks) {
  // Calculate the average marks using the calculateAverage function
  const avg = calculateAverage(marks);

  // Determine the grade based on the average
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
