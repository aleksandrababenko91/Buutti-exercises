/* 6 - Functions
Assignment 1 (Simple function)
a)
Create a variable in the global scope for language.

Then, create a function named hello. 
The function should print "Hello World!" in the specified language (for example, "fi", "en", "es"). 
At least 3 languages need to be supported.

Call your function to make sure it works.

b)
Remove the language variable from the global scope and instead add it as a parameter to your hello function.

Call your hello function 3 times with different values for the language parameter to make your program print
 "Hello World!" to the console with 3 different languages.*/

 const language = {
    fi: "Moikka",
    en: "Hello",
    fr: "Bonjour"
};
 
function hello (congratulations)
     {
    return (language[congratulations]);
}
console.log(hello("fi"));
console.log(hello("en"));
console.log(hello("fr"));
