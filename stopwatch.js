//Constructor function for creating a Stopwatch object

function Stopwatch() {
  //Private variables to track the state and duration of the stopwatch
  let startTime, endTime, running, duration = 0;


  //Method to start the stopwatch
  this.start = function() {
    if (running)
      throw new Error('Stopwatch has already started.');
    running = true;

    //Store the current time when the stopwatch starts
    
    startTime = new Date();
  }

  //Method to stop the stopwatch
  this.stop = function() {
    if (!running)
      throw new Error('Start the stopwatch');
    running = false;

    //Store the current time when the stopwatch stops
    endTime = new Date();

    //Calculate the time difference in seconds and update the duration
    const second = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += second;
  }

  // Method to reset the stopwatch to its initial state
  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  }

  //Getter for accessing the duration of the stopwatch
  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}

//Create a new Stopwatch instance
const sw = new Stopwatch();

//Start the stopwatch
sw.start();

//Stop the stopwatch
sw.stop();

//Display the duration of the stopwatch
console.log(sw.duration);
