/* b)
Calculate and print the average age of the students.

Use a loop when calculating the sum of the ages.

Tip: we can get the length of the array with the length property, 
and use it for the bounds of the loop. For example:

const numbers = [ 2, 4, 6 ];
console.log(numbers.length); // prints 3

// print all elements of the array
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}*/


const age = [20, 35, 27, 44, 24, 32];
console.log(age);
 let sumOfAges = 0;
for (let index = 0; index < age.length; index++) {
   sumOfAges = sumOfAges + age[index];
    console.log(sumOfAges);
}
let averageAge = sumOfAges / age.length;

console.log(averageAge);

