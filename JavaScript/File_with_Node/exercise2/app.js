import fs from "fs";

const obj = {
  "day": "monday",
  "temperature": 20,
  "cloudy": true,
  "sunny": false,
  "windy": false
};

//FirstStep - Convert to JSON OBJECT
const convertToJsonObject = JSON.stringify(obj); 
//console.log(jsonObject);
//SEcond Step - WRITE to Json File
fs.writeFile("forecast_data.json", convertToJsonObject, "utf8", (err) => {
  if (err) {
    console.log("Could not save forecasts to file!");
  }
});
// THIRD Step: READ JSON FILE with Object and modified temperature
fs.readFile("./forecast_data.json", "utf8", (err, data) => {
  if (err) {
    console.log("Could not read forecasts from file!");
  } else {
    const rewriteJson = JSON.parse(data);
    //console.log(rewriteJson);
    rewriteJson.temperature = 30;
    console.log(rewriteJson);
    const convertToJsonObject2 = JSON.stringify(rewriteJson);
    console.log(convertToJsonObject2);
    fs.writeFile("forecast_data.json", convertToJsonObject2, "utf8", (err) => {
      if (err) {
        console.log("Could not save forecasts to file!");
      }
    });
  }
}
);



