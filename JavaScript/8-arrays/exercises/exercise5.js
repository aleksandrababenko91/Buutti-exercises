/*Take the end state of our previous exercises:

[ "pangram:", "the",  "quick", "gray", "fox", "jumps", "over", "the", "lazy", "dog" ]

Using the shift as well as splice and/or pop methods, 
remove the first element and the last 5 elements of the array.

Also remove the element "gray".

The end result should be [ "the",  "quick", "fox", ]. Print your array.*/

const array = ["pangram:", "the",  "quick", "gray", "fox", "jumps", "over", "the", "lazy", "dog"];
array.splice(0, 1);
console.log(array);

array.splice(4, 5);
console.log(array);

array.splice(2, 1);
console.log(array);
