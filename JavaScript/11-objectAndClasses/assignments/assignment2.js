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
//C
console.log("returns the corresponding word in Finnish.");
const translate = word => vocabulary[word];

console.log(translate("network")); // prints "verkko"
console.log(translate("hello"));
console.log(translate("boolean"));
console.log(translate("integer"));

//D
console.log("given word does not exist in the dictionary");
const translate1 = word => vocabulary[word] ? vocabulary[word] : null;
console.log(translate1("fhhfhfhf"));
