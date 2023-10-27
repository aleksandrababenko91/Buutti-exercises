const getCountOfLetters = (string) => {
    let letterCount = {};
    for(let i = 0; i < string.length; i++) {
        if(string[i] === " ") {
            continue;
        } else if(!letterCount.hasOwnProperty(string[i])) {
            letterCount[string[i]] = 1;
        } else {
            letterCount[string[i]]++;
        }
    }
        return letterCount;
}
const result = getCountOfLetters("a black cat");
console.log(result);
    