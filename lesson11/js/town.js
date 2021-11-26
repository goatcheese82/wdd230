const cities = [{'title': 'Preston', 'id': '5604473'}, {'title': 'Fish Haven', 'id': '5585010'}, {'title': 'Soda Springs', 'id': '5607916'}]
class Town {
   constructor(town) {
      this.name = town.name;
      this.founded = town.yearFounded;
      this.photo = town.photo;
      this.motto = town.motto;
      this.population = town.currentPopulation;
      this.avgRain = town.averageRainfall;
      this.events = town.events;
      this.image = town.image;
      this.id = cities.find(x => x.title === town.name).id;
   };

   printSelf = (node) => {
      let info = document.createElement('div');
      info.className = 'town-info';
      let name = document.createElement('h2');
      name.innerHTML = this.name;
      let motto = document.createElement('h3');
      motto.innerHTML = this.motto;
      let founded = document.createElement('p');
      founded.innerHTML = `Year Founded: ${this.founded}`;
      let population = document.createElement('p');
      population.innerHTML = `Population: ${this.population}`;
      let rainfall = document.createElement('p');
      rainfall.innerHTML = `Annual Rain Fall: ${this.avgRain}`;
      let image = document.createElement('img');
      image.setAttribute('src', `../images/${this.photo}`)
      image.setAttribute('alt', `${this.photo}`)
      info.append(name, motto, founded, population, rainfall)
      node.append(info, image);
   }
};


export default Town;