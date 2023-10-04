/*Create the following array:

["banana", "apple", "pear", "pineapple", "lemon"];

Create a loop where you go through items in the array and print all of them.

EXTRA: Print only the fruits that have more than 5 letters in their name.*/

const array = ["banana", "apple", "pear", "pineapple", "lemon"];

for (let i = 1; i < array.length; i++) {
    console.log(array[i]);
}
let a = 5;
for (let i = 0; i < array.length; i++) {
    if (array[i].length >= a) {
        console.log(array[i]);
    }
}



