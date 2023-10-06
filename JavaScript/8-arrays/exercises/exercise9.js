/*Create the following array:

[ "cherry",  "banana", "coconut", "apple", "pear", 
"pineapple", "lemon", "pumpkin" ];

Also create a second array that is empty.

Make the program go through the first array and 
add all fruits with more than 6 characters in their name to the second array. 
Print the second array when done. Use a for…of loop for the task.*/


const fruits = ["cherry",  "banana", "coconut", "apple", "pear", 
"pineapple", "lemon", "pumpkin"];
let arraySecond = [];

const a = 6;
for (let fruit of fruits) {
    if (fruit.length >= a) {
        arraySecond.unshift(fruit);
    }
  
}
console.log(arraySecond);