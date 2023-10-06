/*Assignment 10 (Count letters, advanced)
Create a function getCountOfLetters that calculates the count of each letter 
in a string and returns the information in an array. 
Use the charIndex object above as a reference for each 
character's index in the array, 
but reduce the indexes by one so that 'a' becomes 0, 'b' becomes 1 and so on.

For example:

const result = getCountOfLetters("a black cat");
console.log(result); // prints [ 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, ... 1, 0, 0, 0, 0, 0, 0  ]
    // corresponding letters:    a  b  c  d  e  f  g, h, i, j, k, l, ... t, u, v, w, x, y, z */

function getCountOfLetters (string) {
    let result = "";
for (i = 0; i < string.length; i++) {
    if (string.charAt(i) === "h" ) {
        result++
    }
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === "e" ) {
            result++
        }

}
}
return result
}
console.log(getCountOfLetters("hhhhello"));