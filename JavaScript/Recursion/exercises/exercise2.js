function sum(n) {
    console.log(n)
    if (n <= 0) {
        return 0
    } else { 
        return n + sum(n - 1);
    }
}
console.log(sum(4));   // function called 10 times*/

//increment n = 10;
function sum (n) {
    console.log(n)
    if (n <= 0) {
        return 0
    } else { 
        return n + sum(n - 1)
    }
}
console.log(sum(10));  // function called 55 times*/

// without stop condition
function sum (n) {
    console.log(n);
    return n + sum (n - 1);
}
console.log(sum(4));  

//In the latest version of the sum function, 
// there is no basic (stop) condition that will stop the recursion. 
//This causes the function to be called an infinite number of times 
//until a call stack overflow error occurs. 
//That's why negative values.
// If I dont call console.log(n) before retirn statement: 
//Uncaught RangeError RangeError: Maximum call stack size exceeded.

