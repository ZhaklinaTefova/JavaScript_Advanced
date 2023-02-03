/* 
********* EXERCISE 1 ***********

Create a function that makes api call to the url: "https://swapi.dev/api/people"
After you retrieve the data print the first character in the HTML.
Example:
Character Name: Luke Skywalker
Character Height: 172
Character BirthYear: 19BBY

*/

// making request from JavaScript (the "original" way)
// does not support promises


let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// creating a new XML HTTP request (it is saved into a variable)
let XHReq = new XMLHttpRequest();

// event handler callback
// onload 
XHReq.onload = function () {
    // seccess
    if (XHReq.status >= 200 && XHReq.status < 300) {
        console.log(XHReq);
        console.log(XHReq.responseText);
        // error
    } else if (XHReq >= 400) {
        console.log("ERROR");
    }

    // we can access so needs to be converted into JS object 
    let parsetXHReg = JSON.parse(XHReq.responseText);
    console.log(parsetXHReg);
    // in this case I can enter into the array of objects results
    let personResults = parsetXHReg.results;
    console.log(personResults);
    // onclick 
    btn.addEventListener("click", function () {
        
        // iterate and get the first person data
        for(let i = 0; i < personResults.length; i++){
            ul.innerHTML = `
            <li>Character Name: ${personResults[0].name}</li> 
            <li>Character Height: ${personResults[0].height}</li>
            <li>Character BirthYear: ${personResults[0].birth_year}</li>
            `
        }
    })
};

// take the request and open it(provide a method as a first peace ["GET" request] and second peace an URL)
//          method || URL
XHReq.open("GET", "https://swapi.dev/api/people");
// after opening than send it the request
XHReq.send();