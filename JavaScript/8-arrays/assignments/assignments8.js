function reverseWord(word) {
    let reversedWord = "";
    let index = word.length; 
    console.log(index);
    while (index > 0) { 
        reversedWord += word[ index - 1 ];
        index = index - 1;
    }
    return reversedWord;
}

const sentence = "This is an example sentence";
const wordsArray = sentence.split(" ");
let reversedSentence = "";

for (let i = 0; i < wordsArray.length; i++) {
    reversedSentence = reversedSentence + reverseWord(wordsArray[i]) + " ";
}
console.log(reversedSentence);

