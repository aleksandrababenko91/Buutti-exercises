import readline from "readline-sync";
console.log("Here´s a list of commands that I can execute! help: Opens this dialog. hello: I will say hello to you.botInfo: I will introduce myself. botName: I will tell my name. botRename: You can rename me. forecast: I will forecast tomorrows weather 100% accurately. I f you want to know is it cloudy, sunny, tempearture, or wind: just print and I'll answer. If you want loggout fron chat: print: quit.");

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
        if(temp === "temperature") {
            console.log(" 20 celsius degree");
            continue;
        } if(temp === "cloudy") {
            console.log("yes");
            continue;
        } if(temp === "sunny") {
            console.log("no");
            continue;
        } if(temp === "wind") {
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

