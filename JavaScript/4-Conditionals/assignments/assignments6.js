/*Assignment 6 (Flowchart, ATM)
Create a ATM program to check your balance. Create variables balance, isActive, checkBalance.

Write conditional statements that implement the flowchart below.

Change the values of balance, checkBalance, and isActive to test your code!*/

let balance = 10;
let isActive = true;
let checkBalance = false;

if (!checkBalance) {
    console.log("Have a nice day");
}

else if (checkBalance && isActive && balance > 0) {
    console.log(balance);
}

else if (checkBalance && !isActive) {
    console.log("Your account is not Active");
}

else if (checkBalance && isActive &&  balance === 0) {
    console.log("Your account is Empty");
}

else if (checkBalance && isActive && balance < 0) {
    console.log("Balance is Negative");
}

