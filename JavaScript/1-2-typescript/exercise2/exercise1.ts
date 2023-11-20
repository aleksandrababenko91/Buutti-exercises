function calc (num1: number, num2:number) {
    return (num1 + num2);
}
console.log(calc(2, 3));


//anonymous function

const calcAnonymous = function (num1: number, num2: number) {
    return (num1 + num2);
} 
console.log(calcAnonymous(4, 8));

//arrow function 

const calcArrow = (num1: number, num2: number) => {
    return (num1 + num2);

}
console.log(calcArrow(188, 155));
