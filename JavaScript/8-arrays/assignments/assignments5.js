/*Assignment 5 (How many days)
Create a program that has a variable representing the number of a month. 
(1 = January, 2 = February and so on)

The program should print how many days there are in the given month. 
Do it using an array and indexing.

You might recall when we did this using if and switch-case earlier. 
This array solution is quite a bit simpler, right?*/

//const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
daysInMonth = [30, 31, 31, 30, 31, 28, 30, 31, 30, 30, 30, 28, 30];
let month = 1;
console.log(daysInMonth[month]);