/*Make a copy of your answer to Exercise 2.

Modify the implementation to work as a do-while loop instead of a while loop. Test to make sure your program works.

Modify the condition so it’s always false and test it again.
*/


let a = 15;
let i = 0;
let sequance = "";

do { i += 3;
    sequance += i;
}
while (i <= 100);
console.log(sequance);
