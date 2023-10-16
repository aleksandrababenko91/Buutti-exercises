const fruits = {
    banana: 118, 
    apple: 85, 
    mango: 200, 
    lemon: 65
};

function printWeight(fruit) {
    console.log("Banana weights " + fruits[fruit] + " grams");
}
printWeight("banana");

console.log("List of supported fruits: ", Object.keys(fruits));

