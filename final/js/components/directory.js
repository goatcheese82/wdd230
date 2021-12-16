import Company from "../classes/Company.js";
import { companies } from "../elements/elements.js";

let dir = document.getElementById("dir");
let co = document.querySelectorAll(".company");


const toList = () => {
    dir.style.gridTemplateColumns = '1fr'
}

const toGrid = () => {
    let body = document.querySelector('body');
    if (body.className === 'large') {
        dir.style.gridTemplateColumns = '1fr 1fr 1fr'
    }
    else dir.style.gridTemplateColumns = '1fr 1fr';
}

export const buildDirectory = node => {
    companies.forEach((c, index) => {
        let company = new Company(c.title, c.phone, c.website, c.image, c.address, c.city, c.desc);
        let subNode = document.createElement('div');
        let adId = `company-${index}`;
        subNode.id = adId;
        subNode.className = 'company';
        let title = document.createElement('h3');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let city = document.createElement('p');
        let desc = document.createElement('p');
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
        subNode.append(title, image, phone, website, address, city, desc);
        node.append(subNode);
    })
    let grid = document.getElementById('grid-icon');
    grid.addEventListener('click', toGrid);
    let list = document.getElementById('list-icon');
    list.addEventListener('click', toList);
}