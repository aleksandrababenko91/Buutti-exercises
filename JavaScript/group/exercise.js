const data = [
    { label: 'January', value: 6 },
    { label: 'February', value: 3 },
    { label: 'March', value: 4 },
    { label: 'April', value: 9 },
    { label: 'May', value: 2 },
    { label: 'June', value: 1 },
    { label: 'July', value: 12 },
    { label: 'August', value: 11 },
    { label: 'September', value: 10 },
    { label: 'October', value: 6 },
    { label: 'November', value: 0 },
    { label: 'December', value: 2 }
]
//find max
let max = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i].value > max) {
        max = data[i].value;
    }
}
console.log(max);

//print months
let result = " ";
for(let i = 0; i < data.length; i++) {
    result = result + data[i].label + "  ";
    }
console.log(result);

function printSquare(size) {
    let result = "";
    for (let i = 0; i < size; i++) {
        result += "#".repeat(size) + " ";
    }
    return result;
}








