let num1 = 10;
let num2 = 20;
let num3 = 30;

let smallest = num1;
let largest = num1;

if (num2 < smallest) {
    smallest = num2;
}

if (num3 < smallest) {
    smallest = num3;
}

if (num2 > largest) {
    largest = num2;
}

if (num3 > largest) {
    largest = num3;
}

console.log(smallest + " the smallest number");
console.log(largest + " the largest number");
