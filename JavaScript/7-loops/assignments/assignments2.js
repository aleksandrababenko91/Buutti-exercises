function countSheep (number) {
    let result = "";

    for (let i = 1; i <= number; i++) {
        result += i + " sheep...";
    }
    return result
}
    console.log(countSheep(4));