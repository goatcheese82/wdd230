import { calculateChill } from './windchill.js';

const loc = '328732';
const apiKey = 'AuOaYevIvNnAWS2NSFuwXOgG8M46A5Uw';

const date = new Date;
const today = date.getDay();

const days = [
   "Sun",
   "Mon",
   "Tue",
   "Wed",
   "Thu",
   "Fri",
   "Sat"
]

let forecast = [];

let i = 0;
for (i; i < 5; i++) {
   forecast.push((today + i) % 7)
}


let f = 0;

forecast.map(day => {
   f++;
   const node = document.getElementById(`day${f}`)
   const weekday = document.createElement("H3");
   weekday.innerHTML = days[day];
   node.insertBefore(weekday, node.firstChild);
})

let d = 0

let temps = []

fetch('https://dataservice.accuweather.com/forecasts/v1/daily/5day/328732?apikey=AuOaYevIvNnAWS2NSFuwXOgG8M46A5Uw&Details=true')
   .then(response => response.json())
   .then(data => {
      data.DailyForecasts.map(day => {
         d++;
         const node = document.getElementById(`day${d}`);
         const temp = document.createElement("P");
         temp.innerHTML = `${day.Temperature.Maximum.Value}&#176;F`;
         node.appendChild(temp);
         temps.push(day);
      })
   });

let obj = {};

const toDay = fetch(`http://dataservice.accuweather.com/currentconditions/v1/${loc}?apikey=${apiKey}&details=true`)
.then(response => response.json())
.then(data => {
   const thisDay = data[0];
   document.getElementById('current').innerHTML = `${thisDay.WeatherText}`;
   document.getElementById('high').innerHTML = `${thisDay.Temperature.Imperial.Value}&#176;F`;
   document.getElementById('humidity').innerHTML = `${thisDay.RelativeHumidity}`;
   document.querySelector('#wind').innerHTML = `${thisDay.Wind.Speed.Imperial.Value} mph`;
   let chill = calculateChill(thisDay.Temperature.Imperial.Value, thisDay.Wind.Speed.Imperial.Value);
   document.getElementById('wind-chill').innerHTML = chill;
})

