const getValue = function() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ value: Math.random() });
        }, Math.random() * 1500);
    });
};

