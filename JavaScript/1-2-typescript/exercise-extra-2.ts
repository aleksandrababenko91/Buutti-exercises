const string: string = "Dslfelka21kjnoi350983n2n1292m12lkl2kj4";
let sum: number = 0;

for (let i = 0; i < string.length; i++) {
  const char = string[i];
  if (!isNaN(parseInt(char))) {
    let nums: number = parseInt(char);
    sum += nums; 
  }
}
console.log(sum); 