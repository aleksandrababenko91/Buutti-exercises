function sum(n) {
    console.log(n)
    if (n <= 0) {
        return 1
    } else { 
        return n + sum(n - 1);
    }
}
console.log(sum(4));  // function called 11 times

//increment n
function factorial (n) {
    console.log(n)
    if (n <= 0) {
        return 1
    } else { 
        return n + sum(n - 1)
    }
}
console.log(sum(10)); // function called 56 times
/// without stop condition

function sum (n) {
    console.log(n);
    return n + sum (n - 1);
}
console.log(sum(4));  //Mximum call size over 10000 times 
