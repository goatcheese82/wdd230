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

let i = today;
for (i; i < today + 5; i++) {
   forecast.push((today + i) % 7)
}


let f = 0

forecast.map(day => {
   f++;
   const node = document.getElementById(`day${f}`)
   const weekday = document.createElement("H3");
   weekday.innerHTML = days[day];
   node.insertBefore(weekday, node.firstChild);
})

let d = 0

fetch('https://dataservice.accuweather.com/forecasts/v1/daily/5day/328732?apikey=AuOaYevIvNnAWS2NSFuwXOgG8M46A5Uw')
   .then(response => response.json())
   .then(data => {
      data.DailyForecasts.map(day => {
         d++;
         const node = document.getElementById(`day${d}`);
         const high = document.createElement("P");
         const low = document.createElement("P");
         high.innerHTML = `High: ${day.Temperature.Maximum.Value}&#176;F`;
         low.innerHTML = `: ${day.Temperature.Minimum.Value}&#176;F`;
         node.append(high);
      })
   });


