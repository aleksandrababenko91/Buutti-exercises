/* You've bought a bag with 100 pieces of candy to share with your colleagues. 
There are 5 people to share with, in addition to yourself.

Calculate and print out how many pieces of candy each employee gets.

EXTRA: Because you can't evenly split 100 candy among all six people, 
you decide to keep the extra ones to yourself, 
using the inconvenience of having needed to buy the candy as an excuse. 
Using the modulus operator %, calculate and print out how many extra candy you got from this.
 Also, reduce this candy from the total count before doing the original division.

*/

let amountOfCandys = 100;
let amountOfpeople = 6;

//how many extra keep for myself
let keepExtraToMyself = amountOfCandys % amountOfpeople;
console.log(keepExtraToMyself);

//reduce this candy from the total count

let amountOfCandysWithoutExtra = amountOfCandys - keepExtraToMyself

let amountOfCandysForEachEmployee = amountOfCandysWithoutExtra / amountOfpeople;
console.log(amountOfCandysForEachEmployee);




