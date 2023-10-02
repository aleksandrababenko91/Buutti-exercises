/*Let’s examine a previous assignment and make it better with functions.
Namely, 4 - Data types - Assignment 4
Create functions DamageTree() and DamageRock() that take in one argument, the amount of damage.
Generalize further: Create a function Damage() that takes in two arguments: the hit target, and the amount of damage.*/


function DamageTree(amountOfDamage) {
    return amountOfDamage;
}

function DamageRock(amountOfDamage) {
    return amountOfDamage;
}

function Damage (hitTarget, amountOfDamage) {
    const hitTargetLeft = hitTarget - amountOfDamage;
return hitTargetLeft;
}

console.log("There is ", Damage(30, DamageTree(15)), " Tree hit points left");
console.log("There is ", Damage(90, DamageTree(15)), " Rock hit points left");
   