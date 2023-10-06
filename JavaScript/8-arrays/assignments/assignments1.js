
function isPalindrome (palindrome) {
        for (let i = 1; i < palindrome.length / 2; i++) {
                let leftPalindrome = palindrome[i];
                let rightPalindrome = palindrome[palindrome.length - 1 - i];   
        
        if (rightPalindrome !== leftPalindrome) {
           return false; 
        } 
}

        return true;
}


console.log(isPalindrome("kayak"));


