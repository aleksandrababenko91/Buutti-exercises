// 1 
const student = {
    name: "Saara",
    age: 32,
    courseScore: {
        "JavaScript Basics": 10,
        "Python": 12,
        "CSS": 15
        }
}
console.log("First task: ", student.name, student.age, student.courseScore);
// OR, 
//for (const course in student.courseScore) {   
    //console.log("First task, second colution: ", `${course}: ${student.courseScore[course]}`);
//}

// 2 Add HTMLBasic co course
student.courseScore.HTMLBasic = 10;
console.log("Added HTMLBasic co course: ");
for(const course in student.courseScore) {   
    console.log(`${course}: ${student.courseScore[course]}`);
}

// 3 change Javascript Grade
student.courseScore["JavaScript Basics"] = 4; 
console.log("change Javascript Grade: ");  
for (const course in student.courseScore) { 
    console.log(`${course}: ${student.courseScore[course]}`);
}
