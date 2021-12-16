import Event from "../classes/Event.js";
import { events } from '../elements/elements.js';

// const node = document.getElementById('events');

export const printEvents = node => {
    events.forEach((event, index) => {
        let container = document.createElement('div');
        container.id = `event-${index}`;
        container.className = 'event';
        let date = document.createElement('div');
        date.id = `event-date-${index}`
        date.innerHTML = event.date;
        let description = document.createElement('div');
        description.id = `event-description-${index}`;
        description.innerHTML = event.title;
        container.append(date, description);
        node.append(container);
    })
}