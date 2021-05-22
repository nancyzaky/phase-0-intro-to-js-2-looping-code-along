// Code your solutions in this file


function writeCards(arr, eventName) {
  let newArr = [];
for (let i = 0; i < arr.length ; i++) {
  newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
}
return newArr
}


function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

// To get more acquainted with while, your task is to write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log(). Note that this means that running countdown(10); would actually log 11 times:
// In index.js, build a function named writeCards() that accepts two arguments: an array of string names, and an event name. Create a for loop with a counter that starts at 0 and increments at the end of each loop. The for loop should stop once it has iterated over the length of the array.

// // As with our previous wrapGifts() function, you will create a custom message for each name inside the loop. Unlike that example, however, instead of simply logging the messages to the console, you will collect them in a new array and return this array at the end of the function. (Refer back to the Array Methods lesson if you need a refresher on how we can add an element to an array.) The overall process should be:

// create a new, empty array to hold the messages;
// iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
// after the loop finishes and all of the messages have been added to the new array, return the new array.
// Here is an example of what a call to the writeCards() function might look like:

// writeCards(["Ada", "Brendan", "Ali"], "birthday");
