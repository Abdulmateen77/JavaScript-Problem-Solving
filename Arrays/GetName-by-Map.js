function getFullName(arr) {
  //Using the map method to iterate over the array of objects and concatenate firstname and lastname
  const fullName = arr.map((person) => person.firstname + ' ' + person.lastname);
  return fullName;
}

if (
  getFullName([
    { firstname: "Robert", lastname: "Obrain" },
    { firstname: "Kevin", lastname: "Hart" },
    { firstname: "Dane", lastname: "Cobby" }
  ]).toString() != ["Robert Obrain", "Kevin Hart", "Dane Cobby"]
) {
  console.log("Test fails: Expected output: ['Robert Obrain', 'Kevin Hart', 'Dane Cobby']");
} else {
  console.log("Sample test case passed!");
}

module.exports = getFullName;
