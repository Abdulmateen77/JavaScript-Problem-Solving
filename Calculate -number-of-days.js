//Problem Description:
//You are given a date in the form of "DD/MM/YYYY".
//Calculate the number of days between the given date and today's date.
//Today's day is the date when the program is executed.

//Define a function to calculate the number of days between a given date and today's date
function getNumberOfDays(date) {
    //Get the current date and time, and set the time to midnight (00:00:00)
    const todaysDateTime = new Date().setUTCHours(0, 0, 0, 0);

    //Split the given date into day, month, and year components
    const arr = date.split("/");
    //Reformat the date string to match "MM/DD/YYYY" format
    date = arr[1] + "/" + arr[0] + "/" + arr[2];

    //Get the date and time of the given date, and set the time to midnight (00:00:00)
    const givenDateTime = new Date(date).setUTCHours(0, 0, 0, 0);

    //Calculate the time difference between today's date and the given date in milliseconds
    const timeDifference = todaysDateTime - givenDateTime;

    //Convert the time difference to days and return the result
    const days = timeDifference / (1000 * 60 * 60 * 24);

    //Return the number of days (rounded down to the nearest whole number).
    return Math.floor(days);
}


//Test cases
const givenDate1 = "16/08/2023";
const days = getNumberOfDays(givenDate1);

console.log(`Days between ${givenDate1} and today: ${days1}`);

const givenDate2 = "10/08/2023";
const days2 = getNumberOfDays(givenDate2);
console.log(`Days between ${givenDate2} and today: ${days2}`);
