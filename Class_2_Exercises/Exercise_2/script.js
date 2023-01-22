/* 2.	Create a function that goes through an array of numbers. 
 If the number is odd, it should be incremented by one ( + 1 ) 
 if the number is even, it should be decremented by one ( - 1 ). 
 Return the modified array.
Make sure the array provided is not empty, if it is empty, return false;
BONUS: Make sure it works if the array provided contains different data 
types then numbers ( strings, booleans etc.). Only elements of datatype 
number are taken into consideration.
*/

// 1. Create an array of numbers []
// 2. Create an function that will take one parametar (array)
// 3. Declare new empty array newArray
// 4. Check if the array is empty, and if it is return false
// 5. Create an loop that will iterate through the array
// 6. Check the type of the elements in the array, so for numbers continue looping
// 7. Find the even numbers with an if statment and decrement it by 1
// 8. Find the odd numbers and increment it by one
// 9. Push the new numbers in the newArray

let array = [3, 4, 6, 2, 8, "yes", true];

function evenAndOddNum(array) {
  let newArray = [];

  if (array.length === 0) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] % 2 === 0) {
        newArray.push((array[i] -= 1));
      } else {
        newArray.push((array[i] += 1));
      }
    }
  }
  return newArray;
}

console.log(evenAndOddNum(array));
