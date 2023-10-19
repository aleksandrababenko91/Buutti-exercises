//A
console.log("Create an object: ");
const vocabulary = {
    hello: "hei",
    world: "maailma",
    bit: "bitti",
    byte: "tavu",
    integer: "kokonaisluku",
    boolean: "totuusarvo",
    string: "merkkijono",
    network: "verkko"
}
//B
const obj = { a: 2, b: 5, text: "hello, I am an example" };
const printTranslatableWords = (myObject) => Object.keys(myObject); 
console.log(printTranslatableWords(obj));
console.log(printTranslatableWords(vocabulary));
//C
console.log("returns the corresponding word in Finnish: ");
const translate = word => vocabulary[word];

console.log(translate("network")); 
console.log(translate("hello"));
console.log(translate("boolean"));
console.log(translate("integer"));
//D
console.log("Given word does not exist in the dictionary: ");
const translate1 = word => vocabulary[word] ? vocabulary[word] : null;
console.log(translate1("fhhfhfhf"));

