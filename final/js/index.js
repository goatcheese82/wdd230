import { setMedia, mqls } from './checkMedia.js';
import { buildAds } from './components/ads.js';
import { buildDirectory } from './components/directory.js';
import { printEvents } from './components/events.js';

setMedia();

let main = document.querySelector('main');

let page = main.id;

switch (page) {
    case 'main':
        let adNode = document.getElementById('ads');
        buildAds(adNode);
        let eventNode = document.getElementById('events');
        printEvents(eventNode);
        break;
    case 'directory':
        let node = document.getElementById('dir');
        buildDirectory(node);
        break;
    default:
        break;
}

