let text: string = "Hello! My name is Aleksandra. I am 32 y.o.";
const len = text.length;
const amountOfWords = text.split(' ').length;
const obj: any = { length: len, words: amountOfWords };

console.log(obj);
