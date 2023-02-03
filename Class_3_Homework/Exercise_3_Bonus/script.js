/* 
BONUS: Exercise 3
Find out in the documentation how can you request for "specific character resource"

    Using that url, make API request to get the data
    After you get the data, create a function that is going to print it in the HTML the properties: "birth_year, eye_color, name, homeworld"

    IMPORTANT: the property homeworld, should be informations of the homeworld not the url ;)
    HINT: You would have to do, a api request with the homeworld property value to retrieve it's infomartion.
 */


let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText = "Click Me!";
body.appendChild(btn);

let div = document.createElement("div");
body.appendChild(div);


function getSpecificCharacterResorce() {
    $.ajax({
        url: "https://swapi.dev/api/people/4",
        // url: "https://swapi.dev/api/people",
        method: "GET",
        success: function (response) {
            console.log(response);
            printInfo(response);
        },
        error: function (error) {
            console.log(error);
        }
    })


};

function printInfo(objectResults) {
    // div.innerText = `${objectResults.name} was born in ${objectResults.birth_year} with ${objectResults.eye_color} eye color on ${response.name} planet.`
    function getHomeWorld() {
        $.ajax({
            url: `${objectResults.homeworld}`,
            method: "GET",
            success: function (response) {
                console.log(response);
                div.innerText = `${objectResults.name} was born in ${objectResults.birth_year} year with ${objectResults.eye_color} eye color on ${response.name} planet.`
            },
            error: function (error) {
                console.log(error);
            }
        })
    }
    getHomeWorld();
}

btn.addEventListener("click", function () {
    getSpecificCharacterResorce()
});