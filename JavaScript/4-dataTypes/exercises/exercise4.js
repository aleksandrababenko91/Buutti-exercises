/*
Try changing some of the values in the object
Check the types of all the data fields in the object and print the types to the console
Print the object created to the console
How are objects printed to the console compared to primitive types?
Check the type of your object and print the type to the console*/

const student = {
    name: "Aleksandra",
    age: 32,
    likePizza: true,
};
console.log(student);

student["attendingToSemester"] = true;
console.log(student);  // added value


student["attendingToSemester"] = false;
console.log(student);  // changed value


console.log(typeof(student.name));
console.log(typeof(student.age));
console.log(typeof(student.attendingToSemester));
console.log(typeof(student.likePizza));

console.log(typeof(student));  //object