import { setMedia, mqls } from './checkMedia.js';
import { buildAds } from './components/ads.js';
import { buildDirectory } from './components/directory.js';

setMedia();

let main = document.querySelector('main');

let page = main.id;

let node

switch (page) {
    case 'main':
        node = document.getElementById('ads');
        buildAds(node);
        break;
    case 'directory':
        node = document.getElementById('dir');
        buildDirectory(node);
        break;
}

