/*Create a program that loops through numbers from 1 to 100 and...


if the number is divisible by 3, prints “Fizz”
if the number is divisible by 5, prints “Buzz”
if the number is divisible by both (3 and 5), prints “FizzBuzz”
if no previous conditions apply, prints just the number

Hint: use the modulo / remainder operator %. For example, number % 2 === 0 
can be used to check whether the number is divisible by 2.

Make both for and while versions of this exercise.*/


let n = "";

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
         console.log("Buzz");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            } else {
                console.log(i = i + " ");
            }
}