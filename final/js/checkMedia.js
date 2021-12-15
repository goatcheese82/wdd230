import Nav from './components/nav.js'

export const mqls = [
    window.matchMedia("(max-width: 600px)"),
    window.matchMedia("(max-width: 1099px")
]

let navNode = document.querySelector("nav");

export const matchMedias = mql => {
    let page = document.querySelector('body');
    const nav = new Nav();
    if (mqls[0].matches) {
        nav.build(navNode, 'small');
        page.className = 'small';
        return 'small';
    }
    else if (mqls[1].matches) {
        nav.build(navNode, 'medium');
        page.className = 'medium';
        return 'medium';
    }
    else {
        nav.build(navNode, 'large');
        page.className = 'large';
        return 'large';
    }
}


export const setMedia = () => {
    mqls.forEach((query, index) => {
        matchMedias(mqls[index]);
        mqls[index].addEventListener('change', matchMedias);
    });
}