function exponentValueList(n) {
    if (n <= 0) {  
        console.log("N is negative or 0.");
    }

    for (let i = 2; i <= n; i++) {
        console.log(2 ** i);
    }
}
exponentValueList(4);             

//b
function exponentValueListSecond(n, numberInraise) {
    if (n <= 0) {
        console.log("N is negative or 0.");
    }

    for (let i = 1; i <= n; i++) { 
        console.log(numberInraise ** i);
    }
}
exponentValueListSecond(4, 8); 