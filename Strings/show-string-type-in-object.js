// function to show string type in object
function showProperties(obj){
  for (let prop in obj)
    if (typeof obj[prop] === 'string') 
      console.log (prop, obj[prop])
}

 const movie = {
   title: 'a',
   year: 2022,
   director: "pragy"
 };
 console.log(showProperties(movie))
