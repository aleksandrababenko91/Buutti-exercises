/*We have the following array:

	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that prints the names of all animals that have the letter ‘e’ in their name.

implement the program using a for…of loop
implement the program using the forEach method

EXTRA: transform the loop from exercise 0 to use forEach!*/

// use forEach
const array = [ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];
let string = "";
array.forEach(i => {
    if( i.includes("e")) {
        string += i + " ";
    }
});
console.log(string);

// use  for loop
string = "";
for ( i = 0; i < array.length; i++) {
    if(array[i].includes("e")) {
        //console.log(i);
        string += array[i] + " ";
    }
} 
console.log(string);


