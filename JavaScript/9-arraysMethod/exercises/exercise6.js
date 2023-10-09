/*Using the same array as previously:

	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that finds us all animals that
a) have the letter ‘o’ in their name.
b) don’t have a ‘h’ or ‘o’ in their name!

Print the array with the found animals.*/

const animals = [ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];

//with letter "o"
const animalsWithLetterO = animals.filter(animal => animal.includes("o"));
console.log(animalsWithLetterO);

//withiout "h" or "o"
const animalsWithoutLetterHS = animals.filter(animal => !animal.includes("h") && !animal.includes("a"));
console.log(animalsWithoutLetterHS);