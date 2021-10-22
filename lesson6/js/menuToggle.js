const menuToggle = () => {
   toggle = document.querySelector('#menuBox');
   toggle.checked ? false : true;
   showNav(toggle.checked)
}

const showNav = (toggle) => {
   menu = document.querySelector('nav');
   if (toggle) {
      menu.style.display = 'flex';
   }
   else {
      menu.style.display = 'none';
   }

}