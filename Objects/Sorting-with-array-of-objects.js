// Sorting with array of objects
const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

// Filtering and sorting movies by year and rating
const title = movies
  .filter(m => m.year === 2018 && m.rating >= 4) // Filtering movies of year 2018 with rating >= 4
  .sort((a, b) => a.rating - b.rating) // Sorting movies by rating in ascending order
  .reverse() // Reversing the order to get highest rating first
  .map(m => m.title); // Extracting titles of the filtered and sorted movies

console.log(title); // Output the titles of selected movies
