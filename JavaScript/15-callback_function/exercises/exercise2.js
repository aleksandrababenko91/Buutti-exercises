let countDown = new Promise((resolve, reject) => {
    const result = true;
    setTimeout(() => {
        if(result === true) {
            resolve("3");
        } else {
            reject(new Error("not executed")); // do I need to use reject, if execute is sucessful?
        }
        }, 1000);  
    
});
countDown.then((result) => {
    console.log(result);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2");
        }, 1000); 
    })
    .then((result2) => {
        console.log(result2);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("1");
            }, 1000);
        })
        .then((result3) => {
            console.log(result3);

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Go!");
                }, 1000);
            })
            .then((result4) => {
                console.log(result4);
            })
        });
    });
});

