const charIndex = { a : 1, b : 2, c : 3, d : 4, e : 5, y : 25, z : 26 };

function getCountOfLetters(string) {
    let result = new Array(30).fill(0);
    for (let i = 0; i <= string.length; i++){
        let currentLetter = string[i];
        //console.log(currentLetter);
        let currentLetterIndex = charIndex[currentLetter];
        //console.log(currentLetterIndex);
        if(currentLetterIndex) {
            let currentLetterIndexInArray = currentLetterIndex - 1;
        //console.log(currentLetterIndexInArray);
        result[currentLetterIndexInArray] = result[currentLetterIndexInArray]  + 1;
        }
       
    }
    console.log(result);
    return result;
} 

const result = getCountOfLetters("a b ce aaabb ccd yy z");
