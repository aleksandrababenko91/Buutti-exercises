/*Create the following array of numbers:

	[4, 7, 11, 5, 6, 9, 15, 7]

Go through the array in a loop and delete all numbers that are lesser than 7.

Print the array afterwards to make sure it worked.

You can use either a for or while loop for the task.*/



const array = [4, 7, 11, 5, 6, 9, 15, 7];
let n = 7;
for (let i = 1; i < array.length; i++) {
    if (array[i] <= n) {
        let removed = array.splice(i, 1);
        console.log(removed[0]);
        i--;
    }
}

