export default class Company {
    constructor(title, phone, website, image, address, city, desc) {
        this.title = title;
        this.phone = phone;
        this.website = website;
        this.image = image;
        this.address = address;
        this.desc = desc;
        this.city = city;
    }

    setImage = image => {
        let newImg = document.createElement('img');
        newImg.setAttribute('src', image);
        newImg.setAttribute('alt', `${this.title} image`);
        return newImg;
    }

    buildElement = (type, title) => {
        let newElement = document.createElement(type);
        newElement.innerHTML = title;
        return newElement;
    }

    buildAd = index => {
        let node = document.createElement('div');
        node.id = `ad-${index}`
        node.append(this.title, this.phone, this.website);
        return node;
    }
}