/*Assignment 7 (Sort array)
Write a function sortNumberArray that takes an array as a parameter and sorts the array.

To accomplish this, you'll need to think of an algorithm for sorting an array.

Use loops, indexing and the methods in the learning material to sort the array. 
Do not use Array.sort. While in real productivity code you'd usually use Array.sort, 
it is still important for you to know how it works under the hood, 
and one of the best ways to learn that is implementing it yourself.

For example:
const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
sortNumberArray(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]*/


function sortNumberArray (array) {
    for (let i = 0; i <= array.length; i++) {  // go throw the whole array
        for ( let j = 0; j <= (array.length - i - 1); j++) { //check the last element
            if (array[j] > array[j + 1]) { //compare
                let swap = array[j]; //if some number  larger; then swap elemnts
                array[j] = array[j+1];
                array[j+1] = swap;
                
            }
        }
    }
    console.log(array);
}
const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
sortNumberArray(array);
console.log(array);