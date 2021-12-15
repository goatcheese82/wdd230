import { camelConvert } from '../elements/helpers.js';

export default class WeatherSummary {
   constructor(weather) {
      this.current = weather.current.temp,
      this.high = weather.daily[0].temp.max,
      this.humidity = weather.current.humidity,
      this.windSpeed = weather.current.wind_speed,
      this.windChill = weather.current.feels_like
   }

   printSelf = node => {
      let heading = document.createElement('h3');
      heading.innerHTML = 'Current Weather';
      node.append(heading);
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