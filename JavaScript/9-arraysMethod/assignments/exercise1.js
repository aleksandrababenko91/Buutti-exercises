/*Assignment 1 (Find elements)
We have the following list of numbers: [ 8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50 ]

a)
Using a loop, find the first number that is above 20 and print it.

b)
Do the same as in a), but use Array.find instead.

c)
Using Array.findIndex, find the index of the first number 
that is above 20 and print the index.

d)
Using Array.splice, remove all elements that come after 
the index that you found in c). Afterwards, print the whole array.*/

//a
const myList = [ 8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50 ];

for (i = 0; i < myList.length; i++) {
    let a = myList[i];
    if (a > 20) {
         console.log(a); 
        break }
}


//b
const numAboveTwenty = myList.find(num => num > 20)
console.log(numAboveTwenty);

//c 
const indexOfFirstNumber = myList.findIndex( num => num > 20 )
console.log(indexOfFirstNumber);

//d
 myList.splice(indexOfFirstNumber)
console.log(myList);