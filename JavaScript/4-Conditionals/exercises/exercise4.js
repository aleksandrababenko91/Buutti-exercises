/*Create two boolean-type variables and give them some values.

Write a program that:
prints “both are true” in case both are true,
“first is true, second is false” in case only the first of them is true
“first is false, second is true” in case only the second of them is true
“both are false” in case neither is true*/

let tuesday = true;
let wednesday = false;


if (tuesday && wednesday) {
    console.log("both are true")
    ;}
else if(tuesday){
    console.log("first is true, second is false")
;}
else if(wednesday){
    console.log("first is wrong, second is true")
;}
else{console.log("both are wrong");
}

    




