/*Assignment 3 (Insertion)
Create a function insertNumber that can insert a number 
into the right slot in a sorted array of numbers.

For example:

const array = [ 1, 3, 4, 7, 11 ];
insertNumber(array, 8);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11 ] 
insertNumber(array, 90);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11, 90 ]*/


function insertNumber (array, number) {
array.push(number);
array.sort(function(a, b){
    return a-b;
    }
)
return array;
}

const array = [ 1, 3, 4, 7, 11 ];
insertNumber(array, 8);
console.log(array);
insertNumber(array, 90);
console.log(array);
