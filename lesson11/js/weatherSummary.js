import { camelConvert } from './helpers.js';

export default class WeatherSummary {
   constructor(weather) {
      this.current = weather.main.temp,
      this.high = weather.main.temp_max,
      this.humidity = weather.main.humidity,
      this.windSpeed = weather.wind.speed,
      this.windChill = weather.main.feels_like
   }

   printSelf = node => {
      Object.entries(this).forEach(([k, v]) => {
         if (typeof(v) == 'number'){
            let title = document.createElement('p');
            let val = document.createElement('p');
            title.innerHTML = `${camelConvert(k)}:`;
            let unit = null;
            switch (k) {
               case 'humidity':
                  unit = '%';
                  break;
               case 'windSpeed':
                  unit = ' mph';
                  break;
               default:
                  unit = '&#176;F'
            }
            val.innerHTML = `${v}${unit}`;
            node.append(title, val);
         }
      })
   }
}