class WeatherEvent {
    constructor(timestamp) {
        this.timestamp = timestamp;
    }
    getInformation() {
        return "";
    }
    print() {
        console.log(this.timestamp, "", this.getInformation());
    }
}
class TemperatureChangeEvent extends WeatherEvent {
    constructor(timestamp, temperature) {
        super(timestamp);
        this.temperature = temperature;
    }
    getInformation() {
        return  (`temperature: ${this.temperature} °C`);
    } 
}
class HumidityChangeEvent extends WeatherEvent {
    constructor(timestamp, humidity) {
        super(timestamp);
        this.humidity = humidity;
    }
    getInformation() {
       return `humidity: ${this.humidity} %`;
    }
}  
class WindStrengthChangeEvent extends WeatherEvent {
    constructor(timestamp, wind) {
        super(timestamp);
        this.wind = wind;
    }
    getInformation() {
        return `wind streght: ${this.wind} m/s`;

    }
} 
const weatherEvents = [];

weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));

weatherEvents.forEach(weatherEvent => weatherEvent.print());
// Should print:
// 2022-11-29 03:00 temperature: -6.4°C
// 2022-11-29 04:00 humidity: 95%
// 2022-11-30 13:00 wind strength: 2.2 m/s
