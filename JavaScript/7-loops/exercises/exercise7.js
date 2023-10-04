/*Create a program that finds out the smallest number 
that has a factorial that is divisible by 600.

Print the number.

Do not pre-calculate the answer, 
but use an infinite loop to find the number 
and use the break statement to stop the loop once the number has been found.

(Technically this is also doable without 
    using break or an infinite loop, 
    but we don’t yet have enough knowledge 
    of JS so it’d be difficult to make a task where break is absolutely necessary)
'*/


result = 1;
skip = 600;

for (let i = 1; i++;) {
    result *= i;
    
    if (result % skip === 0) {
        break;
    }
    console.log(result);
}
