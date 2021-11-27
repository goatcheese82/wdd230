import Town from './town.js';

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

const myTowns = ['Preston', 'Fish Haven', 'Soda Springs']

const towns = await getTowns(API_URL);

const printTowns = (towns) => {
   const node = document.getElementById('towns');
   towns.forEach(town => {
      if (myTowns.includes(town.name)){
         let newNode = document.createElement('section')
         newNode.className = 'town';
         let newTown = new Town(town)
         newTown.printSelf(newNode);
         node.append(newNode);
      };
   });
}

printTowns(towns);