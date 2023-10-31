function anotherFunction(arg, func) {
    setTimeout(function() {
        func();
    }, arg);
 }
 
 anotherFunction(1000, function() {
    console.log("first");
 
    anotherFunction(2000, function() {
        console.log("second");
 
        anotherFunction(500, function() {
            console.log("third");
 
            anotherFunction(1500, function() {
                console.log("oh jesus...");
            });
        });
    });
 });
 