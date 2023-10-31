function countDown(callBackFunc, delayTime) {
    setTimeout(function() {   //setTimeout  is a builtInfunction
        callBackFunc(); 
    }, delayTime);
}
countDown(function() {
    console.log("3");
    countDown(function() {
        console.log("2");
        countDown(function() {
            console.log("1");
            countDown(function() {
                console.log("GO!");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
   