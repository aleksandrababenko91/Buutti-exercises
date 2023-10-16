//1
const total = [1, 2, 3];
let sum = total.reduce((acc, curr) => acc + curr);
console.log("Total of all the numbers: ", sum);

//2
const stringConcat = [1,2,3];
const string = stringConcat.reduce((acc, curr) => {
    return acc + "" + curr;
});
console.log("String of all numbers: ", string);


//3
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function totalVotes(voters) {
    let votersTrue = voters.filter(function(voter){
        return voter.voted === true; 
    });
    let sumVotersTrue = votersTrue.length;
        return sumVotersTrue;
}
console.log("Array of voter objects into a count of how many people voted: ", totalVotes(voters)); 


//4
const wishList = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(wishList) {
   let totalPrice = wishList.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);
    return totalPrice;
}
console.log("It would cost to just buy everything at once: ", shoppingSpree(wishList));


//5
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(array){
    return array[0].concat(array[1], array[2]);
}
console.log("Flatten into a single array: ", flatten(arrays));


//7
/*const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];*/

function voterResults(voters){
    let votedPeople = voters.filter(people => people.voted === true);
        //console.log(votedPeople);
    let votedYoung = votedPeople.filter(people => people.age > 18 && people.age <= 25);
        //console.log("Young Voted People: " + votedYoung.length);
    let votedMidAge = votedPeople.filter(people => people.age > 26 && people.age <= 35);
        //console.log("Mid Voted People: " + votedMidAge.length);
    let votedOld = votedPeople.filter(people => people.age > 36 && people.age <= 55);
        //console.log("Old Voted People: " + votedOld.length);
    let numYoungsPeople = voters.filter(people => people.age > 18 && people.age <= 25);
        //console.log("Young People: " + numYoungsPeople.length)
    let numMidsPeople = voters.filter(people => people.age > 26 && people.age <= 35 );
        //console.log("Mid People: " + numMidsPeople.length)
    let numOldsPeople = voters.filter(people => people.age > 36 && people.age <= 55);
        //console.log("Old People: " + numOldsPeople.length)


return { votedYoung: votedYoung.length, votedMidAge: votedMidAge.length, 
    votedOld: votedOld.length, numYoungsPeople: numYoungsPeople.length, 
    numMidsPeople: numMidsPeople.length, numOldsPeople: numOldsPeople.length};
}
console.log("Results of the vote, include how many of the potential voters: ", voterResults(voters));

