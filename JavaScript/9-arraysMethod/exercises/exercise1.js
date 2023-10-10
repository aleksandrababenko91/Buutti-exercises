const sentence = "According to all known laws of aviation, there is no way a bee should be able to fly.";
let result = [];
for (let i = 0; i < sentence.length; i++){
  if (sentence[i] === "a") {
    result.push(i+1);
  }
}
console.log(result); // I found indexes, where are letters "a"

console.log(sentence.slice(0, 10)); //print words wich start with letter "a".
console.log(sentence.slice(13, 16));
console.log(sentence.slice(31, 41));
console.log(sentence.slice(73, 77));









