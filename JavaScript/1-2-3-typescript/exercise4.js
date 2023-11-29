var randomArray = function (length, max) {
    var newArray = Array(length).fill([]).map(function () { return Math.round(Math.random() * max); });
    newArray.sort(function (a, b) { return a - b; });
    return newArray;
};
console.log(randomArray(40, 10));
