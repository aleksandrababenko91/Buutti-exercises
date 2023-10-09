/*Building on your solution for the 
a) part of the previous exercise, 
modify it so that instead of printing the whole array at once, 
you print the animals separately on their own lines.*/

const animals = [ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];


const animalsWithLetterO = animals.filter(animal => animal.includes("o"));
animalsWithLetterO.forEach(animal => {
    console.log(animal);
});

