

let distance = 500;
let speed = 80;

//added built-in function
let travelDistanceInHour = Math.floor(distance / speed);
let travelDistanceInMinutes = Math.floor((distance % speed) * 60 / speed);

console.log("traveling " + distance + " km at " + speed + " km/h would take " + travelDistanceInHour + " hours "  + travelDistanceInMinutes + " minutes.");
