const sizeIndicator = document.querySelector('#size-indicator');

const getWidth = () => {
   let width = document.documentElement.clientWidth;
   if (width > 1000) {
      return "Large";
   }
   else if (width >= 600) {
      return "Medium"
      }
   else
      return "Small";
}

const reportWidth = () => {
   let size = getWidth();
   sizeIndicator.innerHTML = size;
}

window.addEventListener('resize', reportWidth)

