import WeatherSummary from './weatherSummary.js';
import Forecast from './forecast.js';
import { town } from './index.js';


const FORECAST_URL = new URL('https://api.openweathermap.org/data/2.5/forecast');
const SUMMARY_URL = new URL('https://api.openweathermap.org/data/2.5/weather');
const API_KEY = '3229b1a4673fa50eb4949a4fe88901e8';
const CITY_KEY = '5604473';
let params = {
   'appid': API_KEY,
   'units': 'imperial',
   'id': town.id
};


for (let k in params) { SUMMARY_URL.searchParams.append(k, params[k])};
for (let k in params) { FORECAST_URL.searchParams.append(k, params[k])};


const getWeather = async (url) => {
   const res = await fetch(url);
   const weather = await res.json();
   if (weather.error) {
      alert('There was an error fetching your data');
   }
   else {
      return weather;
   };
};


const weather = await getWeather(SUMMARY_URL);
const weatherForecast = await getWeather(FORECAST_URL);

const summary = new WeatherSummary(weather);
const sumDiv = document.getElementById('summary-items')

const forecast = new Forecast(weatherForecast);

summary.printSelf(sumDiv);
forecast.printSelf(sumDiv);