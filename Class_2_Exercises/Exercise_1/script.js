// EXERCISE 1!!!

/* 1.	Create a function that searches for the index of a given item in an array. 
If the item is present, it should return the index, otherwise, it should return -1
 */

let array = ["Yes", "No"];

function findIndex(input) {
  for (let index = 0; index < array.length; index++) {
    if (input === index) {
      return index;
    } else {
      return -1;
    }
  }
}

console.log(findIndex(0));
console.log(findIndex(3));
