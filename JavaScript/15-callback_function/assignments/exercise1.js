console.log();
function sum(limit) {
    let summ = 0;
    for(let i = 0; i <= limit; i++) {
        summ += i;
    }
    return summ;
}
console.log("A:", sum(10)); 

const sumNumbers = function(limit) {
    return new Promise((res, rej) => {
        res(sum(limit));
    });
};
sumNumbers(50000).then((result) => {
    console.log("B:", result);    
});

const delay = function(limit) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(sum(limit));
        }, 2000);
    });
}
delay(50000).then((result2) => {
    console.log("C:", result2);
});
const createDelayedCalculation = function(limit, milisecconds) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(sum(limit));
        }, milisecconds);
    });
}
// Prints 200000010000000 after a delay of 2 seconds
createDelayedCalculation(20000000, 2000).then(result => console.log("D:", result));

// Prints 1250025000 after a delay of 0.5 seconds
createDelayedCalculation(50000, 500).then(result => console.log("D:", result));


//E Because delay time in exercise C (50000) is 2 sec for execution and in D is just 0,5 sec. 
//So the programm just run it faster and dont wait for previous execution 