import WeatherSummary from "./components/weatherSummary.js";

const WEATHER_URL = new URL('https://api.openweathermap.org/data/2.5/onecall');
const API_KEY = '3229b1a4673fa50eb4949a4fe88901e8';

let params = {
   'appid': API_KEY,
   'units': 'imperial',
   'lon': '-84.14036769594284',
   'lat': '39.843938430907926'
};

for (let k in params) { WEATHER_URL.searchParams.append(k, params[k])};


const getWeather = async url => {
    const res = await fetch(url);
    const weather = await res.json();
    if (weather.error) {
        alert('There was an error getting your data.');
    }
    else {
        return weather;
    };
};

const weather = await getWeather(WEATHER_URL);

const currentWeather = new WeatherSummary(weather);

const forecast = currentWeather.daily;

currentWeather.printSelf(document.getElementById('weather'))
