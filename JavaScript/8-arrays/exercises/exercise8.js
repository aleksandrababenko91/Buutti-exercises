/*Create the following array:

	[5, 7, 2, 9, 3, 13, 15, 6, 17, 24]

Go through the array and print all numbers that are divisible by 3.
Use for..in
Use for..of*/

//a
const numbers = [5, 7, 2, 9, 3, 13, 15, 6, 17, 24];
for (const number of numbers ) {
	if (number % 3 === 0)
		console.log(number);
}

//b
for (const number in numbers) {
	if (number % 3 === 0)
	
	console.log(numbers[number]);
}
