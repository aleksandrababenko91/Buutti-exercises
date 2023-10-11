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
//a
console.log("Array before modify", objectArray);
for (let i = 0; i < objectArray.length; i++) {
     let currentObject = objectArray[i];
     if (currentObject !== null && currentObject.toDelete === true) {
          //console.log(currentObject);
          objectArray[i] = null;
          console.log("Array after modify: ", objectArray);
     }
}

//b
let newArray = objectArray.map(item => {
     if (item !== null && item.toDelete === true) {
          return null
     }
     return item
});
console.log(newArray)
 
//c
/*Its depend how we use arrays, 
which method we use.Its influenе on implemence and memory. 
Also iits depend do we processing the entire array at once or delete it on chank. 
It will be faster if we process the whole array at once, 
but necessary enough available memory to hold the entire array.*/