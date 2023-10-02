


// Array in parametr of function
function arrayChange(array) {
myArray[0] = "Sasha";
}
  
const myArray = ["Emily", "Leia", "sandra"];
console.log("Array before function execution: ", myArray);

arrayChange(myArray); //add arrya after function Execution to variable

console.log("After function execution: ", myArray);

//function that takes an object as a parameter


/*
Define the object you give to the function 
and print it to the console before the function execution
Print the object after the function execution*/

function addProperty(object) {
    object.newProperty = "new property";
}

const mySkill = {
    skill: "webdevelopment",
};
console.log("Before function execution", mySkill);
addProperty(mySkill);
console.log("After function execution:", mySkill);