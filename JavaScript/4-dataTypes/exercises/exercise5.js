/*In past slides we had an example of how automatic type conversion 
can lead to some unwanted or surprising results. 
In the example this piece of code was introduced:*/

const text3 = "monkeys " + 6 + 6; // “monkeys 66”
console.log(text3);
//Why does “monkeys” + 6 + 6 result “monkeys 66” 
//Answer: because sum operand has left-associativity meaning that the order of evaluation is left to right

// where as 6 + 6 + “monkeys” results “12 monkeys”?

const text2 = 6 + 6 + " monkeys"; // “12 monkeys”
console.log(text2);




