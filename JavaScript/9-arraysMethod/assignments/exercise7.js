//1
const total = [1, 2, 3];
let sum = total.reduce((acc, curr) => acc + curr);
console.log(sum);

//2
const stringConcat = [1,2,3];

const string = stringConcat.reduce((acc, curr) => {
    return acc + "" + curr;
});
console.log(string);


//3
const voters1 = [
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

function totalVotes(voters1) {
    let votersTrue = voters1.filter(function(voter){
        return voter.voted === true; });

    let sumVotersTrue = votersTrue.length
        console.log(sumVotersTrue);
}
console.log(totalVotes(voters1)); 


//4
const wishlist1 = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(wishlist1) {
    let totalcost = wishList1.reduce((acc, curr) => {
        return acc + curr
    });
}
console.log(shoppingSpree(wishlist1)); // 227005


//5
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
const newArray = arrays.flat();
console.log(newArray);

//6
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(wishlist){
    let priceItems = wishlist.map(item => item.price)
    //console.log(totalCost)
    
    let totalCost = priceItems.reduce((acc, curr) => acc + curr);
    console.log(totalCost);
}
shoppingSpree(wishlist);

//7
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


function voterResults(voters){

let votedPeople = voters.filter(people => people.voted === true)
//console.log(votedPeople);

let votedYoung = votedPeople.filter(people => people.age > 18 && people.age < 25)
//console.log("Young Voted People: " + votedYoung.length);

let votedMidAge = votedPeople.filter(people => people.age > 26 && people.age < 35)
//console.log("Mid Voted People: " + votedMidAge.length);

let votedOld = votedPeople.filter(people => people.age > 36 && people.age < 55)
//console.log("Old Voted People: " + votedOld.length);

let numYoungsPeople = voters.filter(people => people.age > 18 && people.age < 25 )
//console.log("Young People: " + numYoungsPeople.length)

let numMidsPeople = voters.filter(people => people.age > 26 && people.age < 35 )
//console.log("Mid People: " + numMidsPeople.length)

let numOldsPeople = voters.filter(people => people.age > 36 && people.age < 55)
//console.log("Old People: " + numOldsPeople.length)


return { votedYoung: votedYoung.length, votedMidAge: votedMidAge.length, 
    votedOld: votedOld.length, numYoungsPeople: numYoungsPeople.length, 
    numMidsPeople: numMidsPeople.length, numOldsPeople: numOldsPeople.length};

}
console.log(voterResults(voters));