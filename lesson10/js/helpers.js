
export const camelConvert = s => {
   return s.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
}

export const printObject = (obj, node) => {

}

export const getDusk = (weather) => {
   let days = []
    weather.list.forEach(day => {
       if (day.dt_txt.includes('18:00:00')) {
          days.push(day);
       }
   });
   return days;
}

export const calculateChill = (temp, speed) => {
   if (temp < 50 && speed > 3) {
      let chill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
      return chill;
   }
   else {
      return "N/A";
   }
}

export const printDay = (day, node) => {
   const days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
   ]
   let d = new Date(day.dt_txt)
   let weekDay = document.createElement('h3');
   weekDay.innerHTML = days[d.getDay()];
   let icon = document.createElement('img');
   let iconSource = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
   icon.setAttribute('src', iconSource);
   icon.setAttribute('alt', day.weather[0].description);
   let temp = document.createElement('p');
   temp.innerHTML = `${day.main.temp}&#176;F`;
   node.append(weekDay, icon, temp);
}