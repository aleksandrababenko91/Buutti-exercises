//a
let sum = 0;
const ages = [20, 30, 38, 27, 45, 74, 35, 28];

ages.forEach(number => sum += number);

console.log(sum);


//b

let initialValue = 20;

let reduceNumbers = ages.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); 
console.log(reduceNumbers);

//Extra: Add NaN values into the array. How to take them into account in summing?

const agesNaN = [20, 30, NaN, 38, 27, 45, 74, 35, 28];

let reduceNumbersWithNan = agesNaN.reduce((accumulator, currentValue) => {
    if (!isNaN(currentValue)) {
        return accumulator + currentValue;
    } else {
        return accumulator;
    }
}, initialValue);
console.log(reduceNumbersWithNan);