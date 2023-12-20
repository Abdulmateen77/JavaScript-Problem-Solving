//Define a class named Combinatorics
class Combinatorics {

      //Method to calculate the factorial of a number
      factorial(num){
            //Base case: factorial of 0 and 1 is 1
            if(num === 0 || num === 1){
                  return 1;
            }
            //Recursive case: Calculate factorial using recursion
            else{
                  return num * this.factorial(num-1);
            }        
      }

      //Method to find combinations (N choose R)
      findCombinations(N, R){
            //Check if R is greater than N, which is an invalid input
            if (R > N){
                  return 0;
            }
            //Calculate combinations using the factorial formula
            return this.factorial(N) / (this.factorial(R) * this.factorial(N - R));
      }

      //Method to find permutations (N choose R)
      findPermutations(N, R){
            //Check if R is greater than N, which is an invalid input
            if (R > N){
                  return 0;
            }
            //Calculate permutations using the factorial formula
            return this.factorial(N) / this.factorial(N - R);
      }
}
