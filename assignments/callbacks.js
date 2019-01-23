// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  
//Study both the problem and the solution to figure out the rest of the problems.

//
//## Task 2: Callbacks

//This task focuses on getting practice with callback functions by giving you an array of values and instructions on what to do with that array.

//* [ ] Review the contents of the [callbacks.js](assignments/callbacks.js) file.  Notice you are given an array at the top of the page.  Use that array to aid you with your callback functions.

//* [ ] Write out each function using the `ES5`  `function` keyword syntax.

//* [ ] Solve the problems listed.  Save the stretch problems until you have completed Tasks 1-4.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

//Higher order function
//Takes in 2 parameters, the array and callback function
//returns the array's length

function getLength(array, cb) {
  // getLength passes the length of the array into the callback.
  return cb(array);
}

getLength(items, function (array) {
  console.log(array.length);
})


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, function(last) {
  console.log(last)
})


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

sumNums(1, 7, function(x,y) {
  let result = x + y
  console.log(result);
})

//This is our higher order function, it has 3 parameters: x, y, and a callback function
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

multiplyNums(2, 7, function(x, y) {
  console.log(x*y);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

let callBackFunc = function(item, array) {
  if (array.includes(item)) {
    console.log('true');
  } else {
    console.log('false')
  }
}

contains('Gum', items, callBackFunc);

// /* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }
