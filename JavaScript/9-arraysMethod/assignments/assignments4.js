const numbers = [ 4, 7, 1, 8, 5 ];
//a; increment
function incrementAll(numbers) {
    let incrementNum = numbers.map((number) => number +1);
    return incrementNum;
}

const newNumbers = incrementAll(numbers);
console.log(newNumbers);

//b; decrement

function decrementAll(numbers) { 
    let decrementNum = numbers.map((number) => number - 1);
    return decrementNum;
}
const newNumbersDecrement = decrementAll(numbers);
console.log(newNumbersDecrement);