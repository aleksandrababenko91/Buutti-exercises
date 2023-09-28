/*Assignment 3 (Comparison)
When you have two numbers, you can compare which is greater by using the > (greater than) operator:

const person1Age = 15;
const person2Age = 24;

const isFirstPersonOlder = person1Age > person2Age;
console.log(isFirstPersonOlder);  //false
a)
What does the code above print? // false

b)
What is the type of isFirstPersonOlder? //boolean

c)
You are teaching students of two classes on a course.

Students of the first class got grades of 9, 6 and 9.

Students of the second class got grades of 7, 10, and 5.*/

//grades
const firstClass = [9, 6, 9];
const secondClass = [7, 10, 5];

//fisrt class average
let sum1 = 0;
for (const grades of firstClass) {
  sum1 += grades;
}
const averageFisrtClass = sum1 / firstClass.length;
console.log(averageFisrtClass);

//second class average
let sum2 = 0;
for (const grades of secondClass) {
  sum2 += grades;
}
const averageSecondClass = sum2 / secondClass.length;
console.log(averageSecondClass);

let result = averageFisrtClass > averageSecondClass ?
console.log("First class has higher score") : console.log("Second class has higher score");