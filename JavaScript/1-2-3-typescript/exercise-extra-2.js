var string = "Dslfelka21kjnoi350983n2n1292m12lkl2kj4";
var sum = 0;
for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (!isNaN(parseInt(char))) {
        var nums = parseInt(char);
        sum += nums;
    }
}
console.log(sum);
