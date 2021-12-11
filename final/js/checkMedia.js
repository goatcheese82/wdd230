import Nav from './components/nav.js'

export const mqls = [
    window.matchMedia("(max-width: 600px)"),
    window.matchMedia("(max-width: 1099px")
]

let navNode = document.querySelector("nav");

export const matchMedias = mql => {
    const nav = new Nav();
    if (mqls[0].matches) {
        nav.build(navNode, 'small');
    }
    else if (mqls[1].matches) {
        nav.build(navNode, 'medium');    
    }
    else {
        nav.build(navNode, 'large');
    }
}

export const setMedia = () => {
    mqls.forEach((query, index) => {
        matchMedias(mqls[index]);
        mqls[index].addEventListener('change', matchMedias);
    })
}