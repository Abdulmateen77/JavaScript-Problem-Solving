//Define a class named Length
class Length {
      // Constructor to initialize the feet and inch properties
      constructor(feet, inch){
            this.feet = feet;
            this.inch = inch;
      }

      //Method to check if the current Length object is valid
      isValidObject(){
            // Check if both feet and inches are non-negative
            if(this.feet >= 0 && this.inch >= 0){
                  return true; // The object is valid
            }
            else{
                  return false; // The object is not valid
            }
      }

      //Method to add lengths of two Length objects
      addLength(lengthObj){
            //Check if both the current object and the passed object are valid
            if (this.isValidObject() && lengthObj.isValidObject()){
                  //Calculate total feet and total inches
                  let totalFeet = this.feet + lengthObj.feet;
                  let totalInches = this.inch + lengthObj.inch;

                  //Adjust total inches if it exceeds 12
                  if (totalInches >= 12){
                        totalFeet += Math.floor(totalInches / 12);
                        totalInches %= 12;
                  }

                  //Return the result as an array [totalFeet, totalInches]
                  return [totalFeet, totalInches];
            }
            else{
                  // Return [0,0] if either or both objects are invalid
                  return [0,0];
            }
      }
}
