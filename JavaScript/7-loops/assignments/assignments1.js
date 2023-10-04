/*Assignment 1 (Exponent value list)
a)
Create a function named exponentValueList that takes a number n as a parameter.

The number should print 2 multiplied by itself from 1... to n times, each value on its own line.

For example, n = 4 should result in

2
4
8
16
If n is zero or negative, 
the function should just print n needs to be positive and return.

b)
Add a parameter to exponentValueList so that instead of the 
number to raise in power always being 2, it can also be defined by the caller.
*/

function exponentValueList(n) {
    if (n <= 0) {
        console.log("N is negative or 0.");
        return;
    }

    for (let i = 2; i <= n; i++) { 
        console.log(2 ** i);
    }
}

console.log(exponentValueList(4));


//b
function exponentValueListSecond(n, numberInraise) {
    if (n <= 0) {
        console.log("N is negative or 0.");
        return;
    }

    for (let i = 1; i <= n; i++) { 
        console.log(numberInraise ** i);
    }
}

console.log(exponentValueListSecond(4, 8));