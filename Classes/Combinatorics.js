class Combinatorics {
      factorial(num){
            if(num === 0 || num === 1){
                  return 1;
            }
            else{
                  return num * this.factorial(num-1);
            }        
      }
      findCombinations(N,R){
            if (R > N){
                  return 0;
            }
            return this.factorial(N)/(this.factorial(R) * this.factorial(N-R));
      }
      findPermutations(N,R){
            if (R > N){
                  return 0;
            }
            return this.factorial(N)/ this.factorial(N-R);
      }
}
