/*EXTRA: Assignment 9 (Ternary with context)
We are evaluating two computer systems on which we perform an identical set of work.

Computer #1 does the job in 42 minutes with an average energy consumption of 600 watts.

Computer #2 does the job in 57 minutes and uses an average of 480 watts during the process.

Programmatically calculate which computer used less power for the job. 
Total power used is determined by average power consumption multiplied by the time it took for the job to finish.

Using a ternary operator, print the number of the computer which used less electricity.

EXTRA-extra: Use a ternary operator in the parameter that you give to console.log.*/

const computer1 = {
    time: 42,
    energy: 1000
};
const computer2 = {
    time: 57,
    energy: 480
};

let totalPowerComputer1 = computer1.time * computer1.energy;
let totalPowerComputer2 = computer2.time * computer2.energy;

let result = totalPowerComputer1 > totalPowerComputer2 ?
console.log("Computer 1 spent more average power") : console.log("Computer 2 spent more average power");






