import { pCurve, textCurve } from "./textCurve.js";

let headings = document.querySelectorAll("h3");
for (let i = 0; i < headings.length; i++) {
   i.id = `h3${i + 1}`;
}

let title = document.querySelectorAll('[role="banner"] h1')
let titleText = title.firstChild;

pCurve(titleText, 1);
