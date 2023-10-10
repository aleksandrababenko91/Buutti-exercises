const games = [ 
    { id: 1586948654, date: "2022-10-27", score: 145, won: false },
    { id: 2356325431, date: "2022-10-30", score: 95, won: false },
    { id: 2968411644, date: "2022-10-31", score: 180, won: true },
    { id: 1131684981, date: "2022-11-01", score: 210, won: true },
    { id: 1958468135, date: "2022-11-01", score: 111, won: true },
    { id: 2221358512, date: "2022-11-02", score: 197, won: false },
    { id: 1847684969, date: "2022-11-03", score: 203, won: true } 
];

//find player 
let findId = games.filter(function(player) {
    return player.id === 1958468135
});
console.log(findId);

///findIndex  of first winner

//a
let firtsWonGame = games.map(player => player.won).findIndex(function(player){
    return player === true;
});
console.log(firtsWonGame)

//Second Solution
let firtsWonGameIndex = games.map(player => player.won).indexOf(true);
console.log(firtsWonGameIndex)
