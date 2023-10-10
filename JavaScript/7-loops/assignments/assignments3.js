const age = [20, 35, 27, 44, 24, 32];
console.log(age);
let sumOfAges = 0;

for (let index = 0; index < age.length; index++) {
    sumOfAges = sumOfAges + age[index];
    console.log(sumOfAges);
}

let averageAge = sumOfAges / age.length;
console.log(averageAge);

