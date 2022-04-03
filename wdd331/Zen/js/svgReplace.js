const url = "http://www.w3.org/2000/svg";
let vw = window.innerWidth;
console.log(vw);
let r = vw * .02;
let cx = 40;
let cy = 40;
let p = `M ${cx - r}, ${cy}
a ${r},${r} 0 1,1 ${r * 2},0
a ${r},${r} 0 1,1 -${r * 2},0`

const createPath = (defs, node) => {
   let newPath = document.createElementNS(url, "path");
   newPath.id = `${node.id}-curve`;
   newPath.setAttribute("d", p);
   newPath.id = `${node.id}-path`;
   return newPath;
}

const createTextPath = (myPath, txt) => {
   let newText = document.createElementNS(url, "text");
   newText.classList.add("svg-text")
   let newTextPath = document.createElementNS(url, "textPath");
   newTextPath.setAttribute("href", `#${myPath.id}`);
   newTextPath.innerHTML = txt;
   newText.appendChild(newTextPath);
   return newText;
}

export const makeSVG = (node) => {
   let newSvg = document.createElementNS(url, "svg");
   newSvg.setAttribute("width", vw * .1)
   newSvg.setAttribute("height", vw * .1)
   let newDefs = document.createElementNS(url, "defs");
   let myPath = createPath(newDefs, node);
   myPath.setAttribute("width", "100")
   myPath.setAttribute("height", "100")
   newDefs.appendChild(myPath);
   newSvg.setAttribute("viewBox", "0 0 100 100");
   let newTextPath = createTextPath(myPath, node.innerHTML);
   node.innerHTML = "";
   newSvg.append(newDefs);
   newSvg.append(newTextPath);
   return newSvg;

}
