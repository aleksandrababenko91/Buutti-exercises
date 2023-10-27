import readline from "readline-sync";
console.log("Hi! I am a dumb chat bot You can check all the things I can do by typing 'help'");
let counter = 0;
let botName = "Bob";
function countAnswers() {
    counter++;
}
function botRename() {
    let newBotName = readline.question("Type my new name, please: ");
    let answerAgree = readline.question(`Are you happy with the name ${newBotName}?`);
    if(answerAgree === "yes") {
        botName = `${newBotName}`;
        console.log(`I was renamed to ${botName}`);
    } else {
        console.log(`Name not changed. My name is ${botName}.`);
    }
} 
function forecast() {
    let answer = true;
    while(answer) {
        const temp = readline.question("Tomorrows weather will be....");
        if(temp === "temperature?") {
            console.log(" 20 celsius degree");
            continue;
        } if(temp === "cloudy?") {
            console.log("yes");
            continue;
        } if(temp === "sunny?") {
            console.log("no");
            continue;
        } if(temp === "wind?") {
            console.log("no");
            continue;
        } else {
            answer = false;
        }
    }
}
let rightAnswer = true;
while (rightAnswer) {
    const answer = readline.question("Your question: ");
    if(answer.toLowerCase() === "help") {
        console.log("Opens this dialog.");
    } else if(answer.toLowerCase() === "hello") {
        const userName = readline.question("What is your name?");
        console.log(`Hello there, ${userName}!`);
    } else if(answer === "botInfo") {
        console.log(`I am a dumb bot. You can ask me almost anything :). You have already asked me ${counter} questions`);
    } else if(answer === "botName") {
        console.log(`My name is currently ${botName}. If you want to change it, type botRename.`);
    } else if(answer === "botRename") {
        botRename();
    } else if(answer.toLowerCase() === "forecast") {
        forecast();
    } else if(answer.toLowerCase() === "quit") {
        rightAnswer = false;
    }
    countAnswers();
   
}

