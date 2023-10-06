/*Assignment 2 (Range)
Write a function numberRange that takes two numbers as parameters, 
start and end. The function returns an array filled with numbers from start to end.

console.log(numberRange(1, 5));   // prints [ 1, 2, 3, 4, 5 ]
console.log(numberRange(-5, -1)); // prints [ -5, -4, -3, -2, -1 ]
console.log(numberRange(9, 5));   // prints [ 9, 8, 7, 6, 5 ]
Note the order of the values! When start is smaller than end, 
the order is ascending, and when start is greater than end, the order is descending.*/


function numberRange(start, end) {
    const array = [];
    if (start < end) {
        let i = start; 
        while (i <= end) {
            array.push(i);
            i++;
        }
    } else if (start > end) { 
        let i = start; 
        while (i >= end) {
            array.push(i);
            i--;
        }    
    }
return array;
}

console.log(numberRange(1, 5));
console.log(numberRange(-5, -1));      
console.log(numberRange(9, 5));