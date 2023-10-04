/*Assignment 7 (Fruit weight comparison)
We have the following fruits:

a pear, weighting 178 grams
a lemon, weighting 120 grams
an apple, weighting 90 grams
a mango, weighting 150 grams
Create objects for each fruit, with the object containing the fruit's name and its weight.

a)
Calculate the average weight of the fruits and print it.

b)
Programmatically compare the weight of each fruit to the average weight of the fruits.

Print out the name of the fruit that has a weight closest to the average weight.*/

const pear = {name: "pear", weigth: 178}; // 134 - 178 = -44 ; 178 - 134 = 44
const lemon = {name: "lemon", weigth: 120}; //134 - 120 = 14; 120 -134= -14
const apple = {name: "apple", weigth: 90}; //134 - 90 = 44: 90 - 134= - 44
const mango = {name: "mango", weigth: 150}; //134 - 150 = -16; 150 -134 = 16


const sumOfWeigthOfFruits = pear.weigth + lemon.weigth + apple.weigth + mango.weigth;
const averageWeigth = sumOfWeigthOfFruits / 4;
console.log(averageWeigth);


const fruits = [pear, lemon, apple, mango];

let closestDifference = averageWeigth - fruits[0].weigth;
let closestFruit = fruits[0];

for (let i = 0; i < fruits.length; i++) {
  const difference = averageWeigth - fruits[i].weigth;
    if (Math.abs(difference) < Math.abs(closestDifference)) {
      closestDifference = difference;
      closestFruit = fruits[i];
    }
}
console.log("Closest fruit is " + closestFruit.name + " with weigth " + closestFruit.weigth);







