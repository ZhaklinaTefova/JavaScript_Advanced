/* 
Exercise 1
Make 3 anonymous functions (function expressions)

Function that takes a number through a parameter and returns how many digits that number has
Function that takes a number through a parameter and returns if its even or odd
Function that takes a number through a parameter and returns if its positive or negative

BONUS: Create a function that takes a number through a parameter and calls all three 
functions for the number that was passed. It should show the results in the console. 
Ex: Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative */

let body = document.querySelector("body");

let input = document.createElement("input");
input.setAttribute("placeholder", "Enter your number here!")
input.setAttribute("type", "number");
body.appendChild(input);
let numberValue = input.value;

let button = document.createElement("button");
button.innerText = "Click Me :)"
body.appendChild(button);

let ul = document.createElement("ul");
body.appendChild(ul);

// Function ONE return how many digits that number has!
let functionOne = num => { return `Your number ${num} has ${num.toString().length} digits` };

// Function TWO return if number its even or odd!
let functionTwo = num => { return num % 2 === 0 ? `is an even number` : `is an odd number` };

// Function THREE return if number its positive or negative!
let functionThree = num => { return num >= 0 ? `is a positive number` : `is a negative number` };

button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML += `${allFunctions(input.value)}`;
    ul.appendChild(li);
    console.log(allFunctions(input.value));
    clearInput();
});

let clearInput = () => {input.value = ""};

// BONUS Function
let allFunctions = num => {
    return `${functionOne(num)}, ${functionTwo(num)} and ${functionThree(num)}!`};
console.log(allFunctions(23));
console.log(allFunctions(-1));
