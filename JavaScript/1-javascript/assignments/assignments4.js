let number = 5;
const increase = 4;
var limit = 11;

number = number + increase // 9

/* Print number if it is 
bigger 
than limit (11) */

if (number > limit)  {
     console.log(number);
};
number = number + increase // 13


// Check if it is bigger after it has been increased again
if (number > limit)  {  
    console.log(number);
};