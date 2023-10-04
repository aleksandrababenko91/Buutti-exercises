/*Using a loop of your choosing and the continue statement, 
create a program that calculates the factorial of 10, 
but skips every number that is divisible by 3.*/



skip = 3;
limit = 10;
result = 1;
let i = 1;
for (let i = 1; i <= limit; i++) {
    result *= i;
    if (result % skip === 0) {
        console.log(result + " ");
        continue;
    }
    console.log(result);
;}



