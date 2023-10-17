function F(num) {
    if (num == 0) {
        return num;
    } else if (num == 1) {
        return num;
    }
return (F(num - 2) * 3) + F(num - 1);
}
console.log(F(17));  //399331
console.log(F(10));
