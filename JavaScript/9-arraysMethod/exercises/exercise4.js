/*Using the same array as previously:
	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]
Create a program that finds us the first animal that ends in letter ‘t’.
EXTRA: Find the first animal that ends in letter ‘y’ and starts with letter ‘d’.*/


// ends with "t"
const animals= [ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];
let result = "";
animals.forEach(animal => {
    if(animal.endsWith("t")) {
       result += animal + " ";
    }
});
console.log(result);


//ends "y", starts "d"

result = "";
animals.forEach(animal => {
    if(animal.endsWith("y") && animal.startsWith("d")) {
       result += animal + " ";
    }
});
console.log(result);
