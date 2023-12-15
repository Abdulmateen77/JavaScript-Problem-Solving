
function methodOnObject(name, age, college, city, country) {
  // You need to implement this function.
  let person=   {
    name: name,
    age: age,
    college: college,
    city: city,
    country: country,

    getCity: function() {
    return this.name + " lives in " + this.city + ".";
    }
  }
  return person;
}
if ((methodOnObject("Abhinav", 22, "IIT Patna", "Patna", "India").getCity() === "Abhinav lives in Patna."))
  console.log("Sample test case 1 passed!");
else
  console.log("Sample test case 1 failed!");
