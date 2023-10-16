const student = {
    name: "Aili",
    age: 32,
    courseScore: [  {name: "Intro to Programming",
                    score: 3
                    },
                    {name: "Python", 
                    score: 6
                    },
                    {name: "CSS",
                    score: 10
                    }
                ]
}
// 2
const found = student.courseScore.find((course) => course.name = "Intro to Programming");
console.log(student.name + " got " + found.score + " from " + found.name);

// 3

function addCourse(courseName, courseGrade) {
    student.courseScore.push({name: courseName, score: courseGrade});
    return student.courseScore;
}
console.log("Added new course: ", addCourse("HTML", 3));
//console.log(student);
