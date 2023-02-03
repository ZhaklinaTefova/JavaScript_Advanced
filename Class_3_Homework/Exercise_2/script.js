/* 
Exercise 2

Create a function that makes api call to the url "https://swapi.dev/api/planets"
After the data is retrived print the planets on the HTML */


let body = document.querySelector("body");

let btn = document.createElement("button");
btn.innerText = "Click Here";
body.appendChild(btn);

let ul = document.createElement("ul");
body.appendChild(ul);

// make the api call request
let apiCall = new XMLHttpRequest();

// event handlers

// function
apiCall.onload = function(){
    // check the status
    if( apiCall.status >= 200 && apiCall.status<= 300){
        console.log(apiCall);
        console.log(apiCall.responseText);
    } else {
        console.log("ERROR");
    }

    let data = JSON.parse(apiCall.responseText);
    console.log(data);

    let dataResults = data.results;
    console.log(dataResults);

    btn.addEventListener("click", function(){
        for(let i = 0; i < dataResults.length; i++){
            let li = document.createElement("li");
            li.innerText = `Planet ${[i+1]} is: ${dataResults[i].name}`;
            console.log(`${dataResults[i].name}`);
            ul.appendChild(li);
        }
        
    })
    
}

// open the requst and set method and url
apiCall.open("GET","https://swapi.dev/api/planets");
// send the method
apiCall.send();