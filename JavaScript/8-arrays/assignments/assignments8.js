function reverseWord(word) {
    let reversedWord = "";
    while (word.length > 0) { 
        reversedWord += word[word.length - 1];
        word.length = word.length - 1;
    }
    return reversedWord;
}


const sentence = "This is an example sentence";
const wordsArray = sentence.split(" ");
let reversedSentence = "";

//console.log(wordsArray);

for (let i = 0; i < wordsArray.length; i++) {
    reversedSentence = reversedSentence + reverseWord(wordsArray[i]) + " ";
}
console.log(reversedSentence);

