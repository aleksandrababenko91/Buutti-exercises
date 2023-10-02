/* Write a function that calculates the multiplication 
of two numbers and returns the result to the caller.
Try writing the function with all the three 
different function syntaxes; named, anonymous and arrow.
Call the function multiple times in your program 
using different values as parameters
Print the results to the console
*/

//named function
function calc (num1, num2) {
    return (num1 + num2);
}
console.log(calc(2, 3));


//anonymous function

const calcAnonymous = function (num1, num2) {
    return (num1 + num2);
} 
console.log(calcAnonymous(4, 8));

//arrow function 

const calcArrow = (num1, num2) => {
    return (num1 + num2);

}
console.log(calcArrow(188, 155));