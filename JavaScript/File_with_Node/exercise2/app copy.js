import fs from "fs";

const obj = {
  "day": "monday",
  "temperature": 20,
  "cloudy": true,
  "sunny": false,
  "windy": false
};
const jsonString = JSON.stringify(obj);
//console.log(jsonString);
fs.writeFileSync("forecast_data.json", jsonString, "utf8", (err) => {
  if (err) {
    console.log("Could not save forecasts to file!");
  }
});

const readJson = fs.readFileSync("forecast_data.json", { encoding: "utf8", flag: "r" });
const rewriteJson = JSON.parse(readJson);
console.log(rewriteJson);