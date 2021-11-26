import Town from './town.js';
import { getTown, printTitle } from './helpers.js';


const FORECAST_URL = new URL('https://api.openweathermap.org/data/2.5/forecast');
const SUMMARY_URL = new URL('https://api.openweathermap.org/data/2.5/weather');
const townName = getTown();

const API_URL = "https://byui-cit230.github.io/weather/data/towndata.json"

const getTowns = async (url) => {
   const res = await fetch(url);
   const towns = await res.json();
   if (towns.error) {
      alert('There was an error fetching your data');
   }
   else {
      return towns.towns;
   };
}
const towns = await getTowns(API_URL);
export const town = new Town(towns.find(x => x.name === townName));

document.title = `Euphoria Weather - ${town.name}`;

printTitle(town.name);