function getNumberOfDays(date) {
      const todaysDateTime = new Date().setUTCHours(0,0,0,0)

      const arr = date.split("/")
      date =  arr[1] + "/" + arr[0] + "/" + arr[2]

      const givenDateTime = new Date(date).setUTCHours(0,0,0,0)

      const timeDifference = todaysDateTime - givenDateTime

      const days = timeDifference/(1000*60*60*24)

      return Math.floor(days);
}
