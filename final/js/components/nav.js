import { nav } from '../elements/elements.js'

export default class Nav {
    constructor() {
        this.items = nav.items;
    }

    build = (node, size) => {
        let div = node;
        let subdiv = document.createElement('div');
        subdiv.id = 'nav-links';
        let hamburger = document.createElement('div');
        hamburger.append('Hello')
        hamburger.id = 'burger';
        hamburger.setAttribute('onclick', 'displayBurger()')
        while(div.firstChild) {div.removeChild(div.firstChild)};
        size == 'small' ? div.append(hamburger) : null;
        this.makeNav(subdiv);
        div.append(subdiv);
        return;
    }

    makeNav = (node, size) => {
        this.items.forEach(item => {
            let newNode = document.createElement('a');
            newNode.setAttribute('href', item.navPath);
            newNode.className = 'nav-item';
            newNode.innerHTML = item.title;
            node.append(newNode);
        })
    }
}