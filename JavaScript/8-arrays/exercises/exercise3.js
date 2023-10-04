/*Modifying the array from the previous exercise, 
use the push method to add the words “over”, “lazy” and “dog” to the end of the array.

Print the array afterwards to make sure the array looks as expected.

Afterwards, use the unshift method to add the element “pangram:” 
to the beginning of the array.*/

const array = ["the", "quick", "brown", "fox"];

array.push("over", "lazy", "dog");
console.log(array);

array.unshift("pangram: ");
console.log(array);
