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
    if (array[i].includes("e")) {
        //console.log(i);
        string += array[i] + " ";
    }
} 
console.log(string);


