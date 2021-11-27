import TownEvent from "./event.js";

class Events {
   constructor(town) {
      this.events = town.events;
      this.parsedEvents = this.parseEvents();
   }

   parseEvents = () => {
      return this.events.map(event => {
         let date = event.split(':').shift();
         let title = event.split(':').pop();
         let myEvent = new TownEvent(title, date);
         return myEvent;
      })
   }

   printEvents = topNode => {
      let node = document.createElement('div');
      let heading = document.createElement('h3');
      if (this.events.length > 0) {
         heading.innerHTML = 'Upcoming Events';
         node.className = "town-events";
         this.parsedEvents.forEach(event => {
            let subNode = document.createElement('div');
            let date = document.createElement('span');
            let title = document.createElement('span');
            date.innerHTML = `${event.date}:`;
            title.innerHTML = event.title;
            subNode.append(date, title);
            node.append(subNode);
         });
         topNode.append(heading, node);
         return;
      }
      else {
         heading.innerHTML = "There are no upcoming events."
         topNode.append(heading);
         return;
      }
      
   }
}

export default Events;