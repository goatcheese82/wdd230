import Company from "../classes/Company.js";
import { companies } from "../elements/elements.js";


let current = 1;

const cycleAds = () => {

    if (current === 3) {
        current = 1;
    }
    else current++;
    console.log(current);
    setAd();
}

const reversCycle = () => {
    if (current === 1) {
        current = 3;
    }
    else current--;
    console.log(current);
    setAd();
}

const setAd = () => {
    const ad1 = document.getElementById('company-0');
    const ad2 = document.getElementById('company-1');
    const ad3 = document.getElementById('company-2');

    switch(current) {
        case 1:
            ad1.style.display = 'grid';
            ad2.style.display = 'none';
            ad3.style.display = 'none';
            break;
        case 2:
            ad1.style.display = 'none';
            ad2.style.display = 'grid';
            ad3.style.display = 'none';
            break;
        case 3:
            ad1.style.display = 'none';
            ad2.style.display = 'none';
            ad3.style.display = 'grid';
            break;
        default:
            ad1.style.display = 'grid';
            ad2.style.display = 'none';
            ad3.style.display = 'none';

    }
}

export const buildAds = node => {
    companies.forEach((c, index) => {
        let company = new Company(c.title, c.phone, c.website, c.image, c.address, c.city, c.desc);
        let subNode = document.createElement('div');
        let adId = `company-${index}`;
        subNode.id = adId;
        let title = document.createElement('h3');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let city = document.createElement('p');
        let desc = document.createElement('p');
        let buttons = document.createElement('div');
        buttons.className = 'ads-nav';
        let rightButton = document.createElement('div');
        rightButton.className = 'next';
        rightButton.innerHTML = '&#10095';
        let leftButton = document.createElement('div');
        leftButton.className = 'prev';
        leftButton.innerHTML = '&#10094'
        buttons.append(leftButton, rightButton);
        image.setAttribute('src', c.image);
        image.setAttribute('alt', `${title} image`);
        address.innerHTML = c.address;
        city.innerHTML = c.city;
        desc.innerHTML = c.desc;
        website.setAttribute('target', 'blank');
        title.innerHTML = c.title;
        phone.innerHTML = c.phone;
        website.innerHTML = c.website;
        website.setAttribute('href', c.website);
        subNode.append(title, image, phone, website, address, city, desc, buttons);
        node.append(subNode)
        rightButton.addEventListener('click', cycleAds);
        leftButton.addEventListener('click', reversCycle)
    })
    setAd();
}