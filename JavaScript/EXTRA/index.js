const objectArray = [
  { x: 14, y: 21, type: "tree", toDelete: false },
  { x: 1, y: 30, type: "house", toDelete: false },
  { x: 22, y: 10, type: "tree", toDelete: true },
  { x: 5, y: 34, type: "rock", toDelete: true },
  null,
  { x: 19, y: 40, type: "tree", toDelete: false },
  { x: 35, y: 35, type: "house", toDelete: false },
  { x: 19, y: 40, type: "tree", toDelete: true },
  { x: 24, y: 31, type: "rock", toDelete: false }
];

let findEntries = objectArray.filter(function(item) {
  return item !== null && item.toDelete === true;
});
let index = objectArray.findIndex(findEntries)
console.log(index);

