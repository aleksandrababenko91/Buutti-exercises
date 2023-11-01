const waitFor = async function (milliseconds) {
    return await new Promise((res) => {
        setTimeout(() => {
            res(); 
        }, milliseconds);
    });
}
waitFor(2000).then(() => console.log("A: Wait 2 seconds and run"));

const countSeconds = async function() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    await waitFor(1000);
    }
}
countSeconds();