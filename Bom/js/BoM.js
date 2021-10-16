const button = document.querySelector('button');
const input = document.querySelector('input');
const list = []
const showList = document.querySelector('.list')



button.addEventListener("click", () => {
   list.push(input.value);
   const node = document.createElement("LI");
   const text = document.createTextNode(input.value);
   const button = document.createElement("BUTTON");
   button.innerText = 'X';
   node.appendChild(text);
   node.appendChild(button);
   button.onclick = () => node.remove();
   showList.appendChild(node);
   input.value = '';
   input.focus();
});