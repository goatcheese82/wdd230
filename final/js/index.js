import { setMedia, mqls } from './checkMedia.js';
import { buildAds } from './components/ads.js';

setMedia();

let node = document.getElementById('ads');

buildAds(node);