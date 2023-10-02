/*Define a const variable that is a number 
(you can pick whatever number). 
Define a function that takes a number as a parameter 
and uses increment operator to add 1 to the number. 
Return the new value as a return value from the function.
 Print the value of the parameter before it is returned to the console.
Call the function using the variable you declared as a parameter
Print the value of the variable before and after the function call to the console.*/

const a = 10;

function increment (number) {
    number++;
    console.log(number)
    return number
}
console.log("before function: ", a);
const incrementedValue = increment(a);  // save to variable "incremention of a"
console.log("There is an incremented value after function call: ", incrementedValue);


