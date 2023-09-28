/*

Check what is the array length after removing values.
Try printing the whole array to the console.
How are arrays printed to the console compared to primitive types?
Check the type of your array using typeof and print the type to the console.*/

let fruits = ["apple", "banana", "strawberry", "mango"];
console.log(fruits.length);
fruits[0] = "peach", 
fruits[1] = "greapfruit";
console.log(fruits);
fruits.push("pineapple");
console.log(fruits); // added to position #4(if count from 0) or positio "-1"
console.log(fruits.length);
fruits.pop(); //last element "pineapple" removed
console.log(fruits);
console.log(fruits.length); //4
console.log(fruits);
console.log(typeof(fruits)); //oblect

