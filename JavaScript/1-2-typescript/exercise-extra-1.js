console.log("Exercise extra 1: ");
var str = "adsf qwerty";
var array = [];
for (var i = 0; i < str.length; i++) {
    var upDatedArray = str.charCodeAt(i);
    array.push(upDatedArray);
}
console.log(array);
//Extra
console.log("Extra: ");
var fruits = ["Banana", "orange", "apple", "mango", "pineapple", "carrot", "Pumpkin",];
var updatedFruits = fruits.sort(function (a, b) { return a.localeCompare(b, undefined, { sensitivity: 'base' }); });
console.log(updatedFruits);
