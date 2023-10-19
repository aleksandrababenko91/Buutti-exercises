console.log("Exercise 1: ");
const calculateDogAge = (puppysAge) => {
    let conversionRate = 7; //No magic NUmbers
    return Math.floor(puppysAge/conversionRate); // I think the age looking more convenient if I use Math.Floor
} 
console.log("Your doggie is ", calculateDogAge(68), " years old in dog years!");
console.log("Your doggie is ", calculateDogAge(14), " years old in dog years!");
console.log("Your doggie is ", calculateDogAge(48), " years old in dog years!");

console.log("Added a additional argument to function: ");
const calculatePuppysAge = (puppysAge, conversionRate) => Math.floor(puppysAge/conversionRate); 

console.log("Your doggie is ", calculatePuppysAge(100, 7), " years old in dog years!");
console.log("Your doggie is ", calculatePuppysAge(10, 7), " years old in dog years!");
console.log("Your doggie is ", calculatePuppysAge(30, 7), " years old in dog years!");

console.log("Exercise 2: ");
const calculateSupply = (age, amountPerDay) => {
    let amountPerYear = Math.floor(365*amountPerDay);
    return {
        totalAmount: amountPerYear,
        lifeAge: age
    }
}
const lifeTimeSupply = calculateSupply(127, 7.5);
console.log("You will need ", lifeTimeSupply.totalAmount, "to last you until the ripe old age of ", lifeTimeSupply.lifeAge);

const lifeTimeSupply1 = calculateSupply(90, 2.3);
console.log("You will need ", lifeTimeSupply1.totalAmount, "to last you until the ripe old age of ", lifeTimeSupply1.lifeAge);

const lifeTimeSupply2 = calculateSupply(100, 13);
console.log("You will need ", lifeTimeSupply1.totalAmount, "to last you until the ripe old age of ", lifeTimeSupply2.lifeAge);


console.log("Exercise 3: ");
const calcCircumfrence = radius => (2*3.14)*radius;
console.log("The circumference is ", calcCircumfrence(10));

const calcArea = radius => 3.14*(radius**2);
console.log("The area is ", calcArea(10));

console.log("Exercise 4: ");

let celsius = 220;
const celsiusToFahrenheit = celsius => {
    let fahrenheit = (celsius/5*9)+32;
    return {
        F : fahrenheit,
        C : celsius
    }
}
const degrees = celsiusToFahrenheit(celsius);
console.log(degrees.C, "°C is ", degrees.F, "°F");

let fahrenheit = 212; 
const fahrenheitToCelsius = fahrenheit => {
    let celsius = (fahrenheit-32)*5/9;
    return {
        F : fahrenheit,
        C : celsius
    }
}
const degrees1 = fahrenheitToCelsius(fahrenheit);
console.log(degrees1.C, "°C is ", degrees1.F, "°F");

