/*After the previous tasks, our array should look like this:

[ "pangram:", "the",  "quick", "gray", "fox", "over", "lazy", "dog" ]

It is still missing two words.

Use the splice method to add a new element, “jump”, between “fox” and “over”.
 Also add “the” between “over” and “lazy”.*/

const array = ["pangram:", "the",  "quick", "gray", "fox", "over", "lazy", "dog"];

array.splice(5, 0, "jump");
array.splice(7, 0, "the");


console.log(array);
