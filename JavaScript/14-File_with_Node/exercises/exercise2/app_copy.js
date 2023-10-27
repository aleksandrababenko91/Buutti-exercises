import fs from "fs";
const filename = "forecast_data.json";
const obj = {
  "day": "monday",
  "temperature": 20,
  "cloudy": true,
  "sunny": false,
  "windy": false
};
const jsonString = JSON.stringify(obj);
fs.writeFileSync(filename, jsonString, "utf8", (err) => {
  if (err) {
    console.log("Could not save forecasts to file!");
  }
});
const readJson = fs.readFileSync(filename, "utf8");
const rewriteJson = JSON.parse(readJson);
rewriteJson.temperature = 30;
const jsonString2 = JSON.stringify(rewriteJson);
console.log(jsonString2);
fs.writeFileSync(filename, jsonString2, "utf8", (err) => {
  if (err) {
    console.log("Could not save forecast to file");
  }
});
