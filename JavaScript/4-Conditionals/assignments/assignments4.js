/*'Assignment 4 (Logical operators)
Create a program for checking whether a game was worth playing after completing it.

Have three variables: score, hoursPlayed and price. Give them some values.

A game is determined to be worth its price if:

its score is at least 4 and it is free
its score is 4 and its ratio of hours played to price is at least 4
its score is 5 and its ratio of hours played to price is at least 2
Games with scores less than 4 are never considered worth their price.

Print whether the game was worth its price with your specific values. 
Alternate the values to verify that your program works properly.

EXTRA: If you didn't do it yet, do the task with only a single if 
clause and an else clause, without using else if or multiple if clauses.'

его оценка не менее 4 и это бесплатно
его оценка равна 4, а соотношение количества сыгранных часов к цене не менее 4.
его оценка равна 5, а соотношение количества сыгранных часов к цене не менее 2.
Игры с баллами менее 4 никогда не считаются стоящими своей цены.*/


let score = 4;
let hoursPlayed = 5;
let price = 20;

if ((score >= 4 && price <= 0) || 
(score === 4 && (price / hoursPlayed >= 4)) || 
(score === 5 && (price / hoursPlayed >= 2))) {
    console.log("A game is determined to be worth its price");
}
else {
    console.log("Not worth");
}