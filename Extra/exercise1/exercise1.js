const foobar = (limit) => {
    for(let i = 1; i <= limit; i++) {
        let num = "";
        num += i + " ";
        if(num % 3 === 0 && num % 5 === 0) {
            console.log("FooBar");
        } else if(num % 5 === 0) {
            console.log("Bar");
        } else if(num % 3 === 0) {
            console.log("Foo");
        } else {
            console.log(num);
        }
    }
}   
foobar(200);