let nameFirst = "Emily";
let nameSecond = "Claraa";
let nameThird = "Jean";

let lengthNameFirst = nameFirst.length;
let lengthNameSecond = nameSecond.length;
let lengthNameThird = nameThird.length;

let long, middle, short;

if (lengthNameFirst >= lengthNameSecond && lengthNameFirst >= lengthNameThird) {
    long = nameFirst;
    if (lengthNameSecond >= lengthNameThird) {
        middle = nameSecond;
        short = nameThird;
    } else {
        middle = nameThird;
        short = nameSecond;
    }
} else if (lengthNameSecond >= lengthNameFirst && lengthNameSecond >= lengthNameThird) {
    long = nameSecond;
    if (lengthNameFirst >= lengthNameThird) {
        middle = nameFirst;
        short = nameThird;
    } else {
        middle = nameThird;
        short = nameFirst;
    }
} else {
    long = nameThird;
    if (lengthNameFirst >= lengthNameSecond) {
        middle = nameFirst;
        short = nameSecond;
    } else {
        middle = nameSecond;
        short = nameFirst;
    }
}

console.log(long, middle, short);




