class Length {
      constructor(feet,inch){
            this.feet = feet;
            this.inch = inch;
      }

      isValidObject(lengthObj){
            if(this.feet >= 0 && this.inch >= 0){
                  return true;
            }
            else{
                  return false;
            }
      }

      addLength(lengthObj){
            if (this.isValidObject() && lengthObj.isValidObject()){
                  let totalFeet = this.feet + lengthObj.feet;
                  let totalInches = this.inch + lengthObj.inch;

            if (totalInches >= 12){
                  totalFeet += Math.floor(totalInches / 12);
                  totalInches %= 12;
            }
            return [totalFeet, totalInches];
            }
            else{
                  return [0,0]
            }

      }
}
