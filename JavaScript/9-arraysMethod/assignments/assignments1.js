//a
console.log("First number that is above 20 and print it: ");
const myList = [ 8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50 ];

for (i = 0; i < myList.length; i++) {
    let a = myList[i];
    if (a > 20) {
        console.log(a); 
        break;
    }
}
//b 
console.log("Same as in a), but use Array.find: ");

const numAboveTwenty = myList.find(num => num > 20)
console.log(numAboveTwenty);

//c 
console.log("Index of the first number that is above 20 and print the index: ")

const indexOfFirstNumber = myList.findIndex( num => num > 20 )
console.log(indexOfFirstNumber);

//d 
console.log("Remove all elements after the index that you found in c).Print the whole array: ")

myList.splice(indexOfFirstNumber)
console.log(myList);