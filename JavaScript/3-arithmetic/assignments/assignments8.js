/*You're creating a game where players have income that 
is given to them as money at specific intervals.
Mid-way through the game's development, you realize that a player 
having more income than someone else gives them an unfairly large advantage. 
To reduce this advantage, you decide to expnonent each player's 
income with a number between 0 and 1 (say, 0.9) 
to reduce the effect larger income has on the player's final money. 
You could think of it as progressive taxing.

Create variables for the income of two different players. 
Give them values that are different from each other.

a) Print out the difference between the players' income

b) Alter each income by exponentiating them with some specific number (like 0.9). 
Calculate and print the difference between the incomes after exponentiation.

PS. Exponentiation is also called raising a number to a power. 
For example, exponentiating 50 with 0.9 could be called 
"raising 50 to the power of 0.9".*/

let firstPlayerIncomes = 120;
let secondPlayerIncomes = 200;
let exponent = 0.9;

incomesAfterExComponentFirst = firstPlayerIncomes;
incomesAfterExComponentSecond = secondPlayerIncomes;

//progressive taxing
if (firstPlayerIncomes > 100) {
    incomesAfterExponentFirst = firstPlayerIncomes ** exponent;
    console.log(incomesAfterExponentFirst);
} else {
    console.log(firstPlayerIncomes);
}


if (secondPlayerIncomes > 100) {
    incomesAfterExponentSecond = secondPlayerIncomes ** exponent;
    console.log(incomesAfterExponentSecond);
} else {
    console.log(secondPlayerIncomes);
}


//diifference between players

let differenceIncomes = secondPlayerIncomes - firstPlayerIncomes;

let diffentAfterExponetions = incomesAfterExponentSecond - incomesAfterExponentFirst;

console.log(differenceIncomes);
console.log(diffentAfterExponetions);
