/*Assignment 2 (Returning function)
Create a function named minimum that takes 3 numbers as parameters.
The function should find the smallest of the given numbers and return it.
Call your function with different numbers as parameters to make sure it works. 
Forward the returned value to console.log to print the return value of your function.
DO NOT call console.log in the function itself, 
but instead call it after calling your function.*/

function minimum(num1, num2, num3) {

    let smallest = Math.min(num1, num2, num3);
    return smallest;
    }
    
    let result1 = minimum(3, 4, 5);
    let result2 = minimum(67, 46, 38);
    console.log(result1);
    console.log(result2);