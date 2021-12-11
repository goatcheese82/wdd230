const displayBurger = () => {
    const x = document.querySelector('#nav-links');
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'flex';
    }
}
