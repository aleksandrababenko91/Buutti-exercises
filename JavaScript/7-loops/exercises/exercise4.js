/* Using the for loop for each problem, print out the following number sequences:

0 100 200 300 400 500 600 700 800 900 1000
1 2 4 8 16 32 64 128
3 6 9 12 15
9 8 7 6 5 4 3 2 1 0
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

*/

// 0 100 200 300 400 500 600 700 800 900 1000

let sum = "";

for (let number = 0; number <= 1000; number +=100) {
    sum += number + " ";
}
console.log(sum);

//3 6 9 12 15

let sum1 = "";
for (let number = 3; number <= 15; number +=3) {
    sum1 += number + " ";
}
console.log(sum1);


// 1 2 4 8 16 32 64 128

let sum2 = "";
for (let number = 1; number <= 128; number *=2) {
    sum2 += number + " ";
}
console.log(sum2);


/*1 1 1 2 2 2 3 3 3 4 4 4*/
let sum3 = "";

for (let number = 1; number <= 4; number += 1) {
    for (let j = 0; j <= 3; j ++)
    sum3 = sum3 + number + " ";

}
console.log(sum3);

//9 8 7 6 5 4 3 2 1 0
let construction = "";
for (let number = 9; number >= 0; number--) {
  construction = construction + number + " ";
}
console.log(construction);


//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let i = "";
for (let number = 0; number < 4; number ++) {
  for (let j = 0; j <= 4; j++)
  i = i + j + " "; 
}
console.log(i);
