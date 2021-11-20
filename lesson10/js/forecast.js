import { calculateChill, getDusk, printDay } from './helpers.js';

export default class Forecast {
   constructor(weather) {
      this.forecast = getDusk(weather)
   }

   printSelf = node => {
      this.forecast.forEach((day, index) => {
         let subNode = document.getElementById(`day${index + 1}`)
         printDay(day, subNode)
      })
   }
}