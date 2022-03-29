import { textCurve } from "./textCurve.js";

let texts = document.querySelectorAll("h3");
for (let i = 0; i < texts.length; i++) {
   textCurve(texts[i], i, 5)
}

let title = document.getElementById("banner");
textCurve(title, 0, 1)