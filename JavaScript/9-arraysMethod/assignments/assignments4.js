const numbers = [ 4, 7, 1, 8, 5 ];
//a; increment
function incrementAll(numbers) {
    let incrementNum = numbers.map((number) => number + 1);
    return incrementNum;
}
console.log("Increment arryas numbers: ", incrementAll(numbers));

//b; decrement
function decrementAll(numbers) { 
    let decrementNum = numbers.map((number) => number - 1);
    return decrementNum;
}
console.log("Decrement arrays numbers: ", decrementAll(numbers));