// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const firstName = "Olympia"
const lastName = "W"

function returnGreet(greet) {
  console.log(`${greet}, ${firstName} ${lastName}`)
}

returnGreet('Sup');


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count++;
    return count;
  }
};

const newCounter = counter();    //newCounter is our anonymous function
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

//when we invoke counter, we return the invocaiton of an anonymous environment.
// This would not be possible without closures.

//function creates a closure between context of variable and new updated value of that variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
