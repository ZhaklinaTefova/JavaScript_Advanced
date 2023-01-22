/* 3.	Create a function that accepts an array of objects as parameters. 
The object should have the properties: studentName, studentLastname, studentGrades. 
studentName & studentLastname are strings, but studentGrades should be an array of 10 numbers.
 The function should return a new array of the full names of the students that have an average
  score more than 8.
Example: 

a.	Provided: 
[ {
   studentName: “Bob”; 
   studentLastname: “Bobski”; 
   studentGrades: [10, 10, 10, 10, 7, 9, 6, 10, 6, 9]
  },
{
   studentName: “John”; 
   studentLastname: “Doe”; 
   studentGrades: [6, 6, 6, 10, 6, 7, 7, 7, 7, 6]
  },
 ]
-	Returns: [ “Bob Bobski” ]

 */
let student = [
  {
    studentName: "Zhaklina",
    studentLastName: "Tefova",
    studentGrades: [8, 7, 9, 7, 10, 8, 9, 10, 6, 9],
  },
  {
    studentName: "Bob",
    studentLastName: "Bobski",
    studentGrades: [10, 10, 10, 10, 7, 9, 6, 10, 6, 9],
  },
  {
    studentName: "John",
    studentLastName: "Doe",
    studentGrades: [6, 6, 6, 10, 6, 7, 7, 7, 7, 6],
  },
];

// let studentGrades = [8, 7, 9, 7, 6, 8, 9, 10, 6, 9];
function averageGrade(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// console.log(averageGrade(studentGrades));

function studentPassedChecker(arrayOfStudent) {
  let studentThatPassed = [];
  for (let i = 0; i < arrayOfStudent.length; i++) {
    console.log(arrayOfStudent[i].studentGrades);
    if (averageGrade(arrayOfStudent[i].studentGrades) >= 8) {
      studentThatPassed.push(
        `${arrayOfStudent[i].studentName} ${arrayOfStudent[i].studentLastName}`
      );
    }
  }
  return ` ${studentThatPassed} has passed`;
}

let result = studentPassedChecker(student);
console.log(result);
