function reverseWord(word) {
    let reversedWord = "";
    let index = word.length; 
    while (index > 0) { 
    reversedWord += word[ index - 1 ];
    index = index - 1 
    }
    return reversedWord;
}
const sentence = "This is an example sentence";
const wordsArray = sentence.split(" ");
//Now the wordsArray looks like this: ["This", "is", "an", "example", "sentence"]
let reversedSentence = "";
// Iterate through the wordsArray, you could use forEach and similar iterators for this as well
for (let i = 0; i < wordsArray.length; i++) {
    // For each word in the wordsArray array, we add the result from reverseWord() function to the string
    // along with an empty space
    reversedSentence = reversedSentence + reverseWord(wordsArray[i]) + " ";
}
console.log(reversedSentence);