const getWidth = () => {
   let width = document.documentElement.clientWidth;
   let image = document.querySelector('#hero-pic');
   console.log(image)
   if (width > 1000) {
      console.log('large')
      return "Large";
   }
   else if (width >= 600) {
      console.log('medium')
      return "Medium"
      }
   else
      console.log('small')
      return "Small";
}

window.addEventListener('resize', getWidth)

