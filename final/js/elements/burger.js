const displayBurger = () => {
    const x = document.querySelector('#nav-links');
    let icon = document.getElementById('burger-icon');
    if (x.style.display === 'flex') {
        icon.setAttribute('src', './images/common/burger.svg')
        x.style.display = 'none';
    }
    else {
        icon.setAttribute('src', './images/common/burger-open.svg')
        x.style.display = 'flex';
    }
}
