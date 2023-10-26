import fs from "fs";

const readStream = fs.createReadStream("./textFile.txt", 'utf-8');
let newData = ''; 

readStream.on("data", (txt) => {
   const wordArray = txt.split(" ");
   let newArray = wordArray.map(word => word.toLowerCase() === "joulu" ? "kinkku" : word);
   let newArray2 = newArray.map(word => word.toLowerCase() === "lapsilla" ? "poroilla" : word);
   newData += newArray2.join(' '); 
});

readStream.on("end", () => {
   const writeStream = fs.createWriteStream("./newTextFile.txt", "utf-8");
   writeStream.write(newData); 
   writeStream.end(); 
   console.log("Write operation complete.");
});


