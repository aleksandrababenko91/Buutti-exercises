const wordArray = [ "The", "quick", "silver", "wolf" ];

function sentencify(array, index) {
    if (index === wordArray.length - 1) {
        return wordArray[index] + "!";
    } else {
        return wordArray[index] + " " + sentencify(array, index += 1);
    } 
}
console.log(sentencify(wordArray, 1));


/*function sentencify(wordArray, index) {
    let string = "";
    for (i = index; i < wordArray.length; i++) {
        string += wordArray[i] + " ";
    }
    return (string);   
}
consoe.log(sentencify(wordArray, 0));
;*/