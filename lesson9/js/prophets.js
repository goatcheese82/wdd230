import styles from './style.js';
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const mqls = [
   window.matchMedia("(max-width: 600px)"),
   window.matchMedia("(max-width: 1099px")
]

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      const prophets = jsonObject['prophets'];
      for (let i = 0; i < prophets.length; i++) {
         let card = document.createElement('section');
         let h2 = document.createElement('h2');
         let birfday = document.createElement('p');
         let birfPlace = document.createElement('p');
         let image = document.createElement('img');

         //Title
         h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
         Object.assign(h2.style, styles.cards.h2)
         
         //Birthday
         birfday.textContent = `Date of Birth: ${prophets[i].birthdate}`;
         Object.assign(birfday.style, styles.cards.p)
         
         //BirthPlace
         birfPlace.textContent = `Place of Birth: ${prophets[i].birthplace}`;
         Object.assign(birfPlace.style, styles.cards.p)
         
         //Image
         image.setAttribute('src', prophets[i].imageurl);
         image.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`)
         Object.assign(image.style, styles.cards.image)
         
         //Create
         Object.assign(card.style, styles.cards.card)
         card.append(h2, birfday, birfPlace, image);

         document.querySelector('div.cards').appendChild(card);
      }
   }
   );

let cards = document.querySelector('.cards');
Object.assign(cards.style, styles.doc.large);

let body = document.querySelector('body');
Object.assign(body.style, styles.body)

let main = document.querySelector('main');
Object.assign(main.style, styles.main)

function matchMedias(mql) {
   if (mqls[0].matches){
      Object.assign(cards.style, styles.doc.small);
   }
   else if (mqls[1].matches){
      Object.assign(cards.style, styles.doc.medium);
   }
   else Object.assign(cards.style, styles.doc.large);
};


for (let i = 0; i < mqls.length; i++) {
   matchMedias(mqls[i]);
   mqls[i].addEventListener('change', matchMedias);
}
