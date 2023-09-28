
const book1 = {
    name: "Dune",
    pages: 412,
    read: true
}
const book2 = {
    name: "Eye of the world",
    pages: 782,
    read: true
}

console.log(book1);
console.log(book2);

book1.read = false;
book2.read = false;

console.log(book1);
console.log(book2);

