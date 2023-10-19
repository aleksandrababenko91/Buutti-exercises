const getCountOfLetters = (string) => {
    let letterCount = {};
    for(i = 0; i < string.length; i++) {
        if(string[i] === " ") {
            continue;
        } else if(letterCount.hasOwnProperty(string[i])) {
            letterCount[string[i]]++;
        } else {
            letterCount[string[i]] = 1;
        }
    }
        return letterCount;
}
const result = getCountOfLetters("a black cat");
console.log(result);
