const games = [ 
    { id: 1586948654, date: "2022-10-27", score: 145, won: false },
    { id: 2356325431, date: "2022-10-30", score: 95, won: false },
    { id: 2968411644, date: "2022-10-31", score: 180, won: true },
    { id: 1131684981, date: "2022-11-01", score: 210, won: true },
    { id: 1958468135, date: "2022-11-01", score: 111, won: true },
    { id: 2221358512, date: "2022-11-02", score: 197, won: false },
    { id: 1847684969, date: "2022-11-03", score: 203, won: true } 
];

//a
let wonGames = games.filter(function(game) {
    return game.won === true;
});
console.log("All games that the player has won: ", wonGames);

let sumScoreOfWonGames = wonGames.reduce((acc, curr) => acc + curr.score, 0);
console.log("Average score of WON Games: ", sumScoreOfWonGames/wonGames.length);

//b 
let lostGames = games.filter(function(game) {
    return game.won === false;
});
console.log("All games that the player has lost: ", lostGames);

let sumScoreOfLostGames = lostGames.reduce((acc, curr) => acc + curr.score, 0);
console.log("Average score of LOST Games: ", sumScoreOfLostGames/lostGames.length);