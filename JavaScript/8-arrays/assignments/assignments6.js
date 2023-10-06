/*Assignment 6 (Find largest)
Create a function findLargest that finds and returns 
the largest number in a given array of numbers.

const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
const largest = findLargest(array);
console.log(largest); // prints 22*/

function findLargest(array) {
    array.sort(function(a, b){return a-b})
    const largest = array[array.length - 1];
    return largest;
}
const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
const largest = findLargest(array);
console.log(largest);