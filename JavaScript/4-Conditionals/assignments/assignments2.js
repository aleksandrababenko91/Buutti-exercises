let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " the largest number");
}
if (num1 < num2 && num1 < num3) {
    console.log(num1 + " the smallest number");
}
if (num2 > num1 && num2 > num3)
{
    console.log(num2 + " the largest number");
}
if (num2 < num2 && num2 < num3) {
    console.log(num2 + " the smallest number");
}
if (num3 > num1 && num3 > num2){
    console.log(num3 + " the largest one");
}

if (num1 === num2 && num2 === num3) {
    console.log("They are equal");
}