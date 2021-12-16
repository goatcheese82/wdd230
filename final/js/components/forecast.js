import { days } from "../elements/elements.js"

export default class Forecast {
    constructor(weather) {
        this.weather = weather
    }

    buildForecast = node => {
        node.className = 'weather-forecast'
        this.weather.forEach((day, index) => {
            if (index < 3){
                let d = new Date(day.dt * 1000);
                let weekDay = document.createElement('h3');
                weekDay.innerHTML = days[d.getDay()];
                let subNode = document.createElement('div');
                subNode.className = 'forecast-card';
                let temp = document.createElement('p');
                temp.innerHTML = `${Math.round(day.temp.day)}&#176;F`;
                let icon = document.createElement('img');
                let iconSource = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
                icon.setAttribute('src', iconSource);
                icon.setAttribute('alt', day.weather[0].description);
                subNode.append(weekDay, temp, icon);
                node.append(subNode);
            }
            else {
                return;
            }
        })
    }
}