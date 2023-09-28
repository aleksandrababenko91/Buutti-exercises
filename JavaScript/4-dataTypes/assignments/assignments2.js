/*Assignment 2 (Beware of type coercion)
a)
What are the values of result1 and result2 in the program below? Explain why they are different. 
What is the type of number before it gets null assigned as its value?*/

let number;
const result1 = 10 + number; // output: 10 

number = null;
const result2 = 10 + number; // output: null

 /*Answer: Because  when you summarize "indefined" and numbers - always be a NaN. 
 But if you sum numbers with null - there will be a numbers.


 Answer: number is of type undefined.*/
/*
b)
What are the values of c, d, and e in the program below? Why are d and e different from each other?

Write the answer as a comment in your JS file.

Note: It is generally not a good idea to sum different data types 
like this when it's not clear what the result is.*/

const a = true;  // boolean
const b = false; //boolean

const c = a + b;  // output: 1, because a and interpreted like numbers, because true is 1, false is 0. 
const d = 10 + a; // 11. Same logic. 10 + 1
const e = 10 + b; // 10. 10 + 0
