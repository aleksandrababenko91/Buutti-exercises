function sortNumberArray (array) {
    for (let i = 0; i <= array.length; i++) {  // go throw the whole array
        for ( let j = 0; j <= (array.length - i - 1); j++) { //check the last element
            if (array[j] > array[j + 1]) { //compare
                let swap = array[j]; //if some number  larger; then swap elemnts
                array[j] = array[j+1];
                array[j+1] = swap;             
            }
        }
    }
    console.log(array);
}
const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
sortNumberArray(array);
console.log(array);