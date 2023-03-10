/* 
Exercise 2
Create a function that takes a string and returns the number (count) 
of vowels contained within it. (Use anonymous functions/Arrow functions 
for the implementation)

Ex: Code: countVowels("Pineapple"); Console: 4 vowels

BONUS: Provide the input from the HTML, and print the result on the HTML.
*/

let body = document.querySelector("body");

let input = document.createElement("input");
input.setAttribute("placeholder", "Please provade a word!");
body.appendChild(input);


let button = document.createElement("button");
button.innerText = "Click Here!";
body.appendChild(button);

let ul = document.createElement("ul");
body.appendChild(ul);

// // Regex:
// let countVowels = (str) => {
//     let vowels = str.match(/[aeiou]/gi);
//     return vowels === null ? `Your word has no vowels` : `Your word ${str} has ${vowels.length} vowels!`;
// }
// // test the function
// console.log(countVowels("aaa"));

// LOOP
let vowels = ["a","e","u","o","i"];

let countVowels = (word) => {
    count = 0;
    for(let vowel of word) {
        if(vowels.includes(vowel.toLowerCase())){
            count++
        }
    } return `Your word ${word} contain ${count} vowels.`
}
// test the function
console.log(countVowels("aaa"));
console.log(countVowels("a"));

// event click on a button
button.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please provide a word");
    } else {
        let li = document.createElement("li");
        li.innerText = `${countVowels(input.value)}`;
        ul.appendChild(li);
    }
    clearInput();
});

let clearInput = () => { input.value = "" };

// let isNumber = value => { return !isNaN(value) && typeof value === 'number' }
// console.log(isNumber(3));
// console.log(isNumber("d"));
