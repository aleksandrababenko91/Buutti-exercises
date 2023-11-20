console.log("Exercise extra 1: ");
let str: string = "adsf qwerty"
let array: number[] = [];
for(let i = 0; i < str.length; i++){
  let upDatedArray: number = str.charCodeAt(i);
  array.push(upDatedArray);
}
console.log(array);


//Extra
console.log("Extra: ");
const fruits: Array<string> = ["Banana", "orange", "apple", "mango", "pineapple", "carrot", "Pumpkin", ];
const updatedFruits: string[] = fruits.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))
console.log(updatedFruits);
