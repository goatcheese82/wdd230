let today = Math.round(Date.now() / 8640000);
const checkStorage = () => {
   let node = document.getElementById('last-visit');
   let lastVisit = (localStorage.getItem('lastVisit') != null) ? localStorage.getItem('lastVisit') : today;
   if (lastVisit != today) {
      let interval = today - lastVisit;
      node.innerHTML = `${interval} days since your last visit.`
   }
   else {
      node.innerHTML = "Your last visit was today!";
   }
}

const setLast = () => {
   alert('you are closing the window')
   localStorage.setItem('lastVisit', today)
}

checkStorage();
window.onunload = () => setLast();