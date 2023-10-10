/*Using the same array as previously:

	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Using map,
create a new array that contains the lengths of the animals’ names
create a new array that contains booleans that tell whether 
the specific animals have the letter ‘o’ as their second letter

Print the original array as well as both arrays created with map.*/


const animals = [ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];
/*const lengthOfAnimalsNames = animals.map(animal => animal.length);
console.log(lengthOfAnimalsNames);*/

const animalsWithLetterO = animals.map(animal => {
	if (animal[1].includes("o"))
		console.log(animal, true);
})

