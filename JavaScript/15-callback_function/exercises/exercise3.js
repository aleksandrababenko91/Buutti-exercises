const getValue = function() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ value: Math.random() });
        }, Math.random() * 1500);
    });
};
// Promise version
let value1 = 0;
let value2= 0;
getValue().then((result) => {
    value1 = result.value;
    console.log(value1);

getValue().then((result) => {
    value2 = result.value;
    console.log(value2);
    });                                             
});

// Async await version
async function exercise3Async() {
    let value3 = await getValue();
    console.log(value3);
    let value4 = await getValue();
    console.log(value4);
}
exercise3Async();
    