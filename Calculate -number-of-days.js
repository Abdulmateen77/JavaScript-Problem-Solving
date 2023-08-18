// Problem Description
// You are given a date in the form of "DD/MM/YYYY". Calculate the number of days between the given date and today's date.
// Today's day is the date when the program is executed.


function getNumberOfDays(date) {
      const todaysDateTime = new Date().setUTCHours(0,0,0,0)

      const arr = date.split("/")
      date =  arr[1] + "/" + arr[0] + "/" + arr[2]

      const givenDateTime = new Date(date).setUTCHours(0,0,0,0)

      const timeDifference = todaysDateTime - givenDateTime

      const days = timeDifference/(1000*60*60*24)

      return Math.floor(days);
}
