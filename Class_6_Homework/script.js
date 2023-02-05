/*
Exercise 1
There is a JSON file with students. Make a call to the file and
 get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers Link: 
https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
*/

// make a call to the JSON file and get the data
function getData() {
    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
        method: "GET",
        success: function (response) {
            // console.log(response);
            let data = JSON.parse(response);
            // console.log(data);
            
            console.log("Students that have an average grade higher than 3");
            let studentsAvgMoreThan3 = data.filter(person => person.averageGrade > 3 );
            console.log(studentsAvgMoreThan3);

            console.log("Female student names with an average grade of 5");
            let femaleStudents = data.filter(female => female.gender === "Female" && female.averageGrade === 5 
                ).map(person => person.firstName);
            console.log(femaleStudents);

            console.log("Male student full names who live in Skopje and are over 18 years old");
            let maleStudents = data.filter(male => male.gender === "Male" && male.city === "Skopje"  && male.age > 18).map(male => `${male.firstName} ${male.lastName}`);
            console.log(maleStudents);

            console.log("The average grades of all female students over the age of 24");
            let averageFemaleGrades = data.filter(female => female.gender === "Female" && female.age > 24 ).map(female => female.averageGrade);
            console.log(averageFemaleGrades);

            console.log("male students with a name starting with B and average grade over 2");
            let maleNamesStartB = data.filter(male => male.gender === "Male" && male.firstName[0].match("B") && male.averageGrade > 2).map(male => male.firstName);
            console.log(maleNamesStartB);
        },
        error: function (error) {
            console.log(error);
        }
    })
};
getData();

