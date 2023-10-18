//A
console.log("A. Calculate sum of grade scores)")
const valueOfRanks = {
    S: 8,
    A: 6,
    B: 4,
    C: 3,
    D: 2,
    F: 0
};

function calculateTotalScore(grades) {
    let total = 0;
    for(i = 0; i < grades.length; i++) {
        total += valueOfRanks[grades[i]];
    }
    return total;
}
const totalScore = calculateTotalScore("DFCBDABSB");
console.log(totalScore); // prints 33

//B
console.log("B.Returns the average score from the grades.");
function calculateAverageScore(grades) {
    return totalScore/grades.length;
}
const averageScore = calculateAverageScore("DFCBDABSB");
console.log(averageScore); // prints 3.6666666666666665

//B
console.log("Average score using calculateTotalScore function implementation of calculateAverageScore.");
function calculateAverageScore(grades) {
    return calculateTotalScore(grades)/grades.length;
}
const averageScore1 = calculateAverageScore("DFCBDABSB");
console.log(averageScore1); // prints 3.6666666666666665

//C
console.log("C. convert this array into an array of average scores of the sequences.");
const array = [ "AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC" ];
function calculateAverageScoreS(grades) {
    return grades.map(grade => calculateAverageScore(grade));
}
const averageScoresOfSequences = calculateAverageScoreS(array);
console.log(averageScoresOfSequences); 