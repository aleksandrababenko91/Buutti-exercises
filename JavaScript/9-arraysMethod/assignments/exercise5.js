const students = [ { name: "Sami", score: 24.75 },
                   { name: "Heidi", score: 20.25 },
                   { name: "Jyrki", score: 27.5 },
                   { name: "Helinä", score: 26.0 },
                   { name: "Maria", score: 17.0 },
                   { name: "Yrjö", score: 14.5  } ];

function getGrades(students) {
    let studentsGrades = students.map(student =>  {
        let grade;
        if (student.score < 14) {
           grade = 0;
        } else if (student.score >= 14 && student.score <= 17 ) {
            grade = 1;
        } else if(student.score > 17 && student.score <= 20) {
            grade = 2;
        } else if (student.score >= 20 && student.score <= 23) {
            grade = 3;
        } else if(student.score > 23 && student.score <= 26) {
            grade = 4;
        } else if (student.score >= 26) {
            grade = 5;
        }
        return {name : student.name, grade: grade}
        }); 
        return studentsGrades;
        }

const newGrades = getGrades(students);
console.log(newGrades);

