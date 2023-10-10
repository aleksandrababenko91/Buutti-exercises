//a
const myList = [ 8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50 ];

for (i = 0; i < myList.length; i++) {
    let a = myList[i];
    if (a > 20) {
        console.log(a); 
        break;
    }
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