function countLetterInSentence(string, letter) {
    let countOfletter = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i).toLowerCase() === letter) {  
            countOfletter++;
        }
    }
    return countOfletter;
}
    

function checkSentenceVowels(sentence) {

    let countOfAs = countLetterInSentence(sentence, "a");
    let countOfEs = countLetterInSentence(sentence, "e");
    let countOfYs = countLetterInSentence(sentence, "y");
    let countOfUs = countLetterInSentence(sentence, "u");
    let countOfIs = countLetterInSentence(sentence, "i");
    let countOfOs = countLetterInSentence(sentence, "o");

    console.log("A letter count: " + countOfAs);
    console.log("E letter count: " + countOfEs);
    console.log("I letter count: " + countOfIs);
    console.log("O letter count: " + countOfOs);
    console.log("U letter count: " + countOfUs);
    console.log("Y letter count: " + countOfYs);

    const totalCount = countOfAs + countOfEs + countOfIs + 
        countOfOs + countOfUs + countOfYs;

    console.log("Total vowel count: " + totalCount);
}

checkSentenceVowels("A wizard's job is to vex chumps quickly in fog.");