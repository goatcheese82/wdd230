const getDate = () => {
   let date = new Date;
   document.getElementById("year").innerHTML = `&#169 ${date.getFullYear()}| Benjamin Smith | Ohio | BYUI Online Learning`;
}

const getModified = () => {
   let modDate = document.lastModified;
   document.getElementById("modified-date").innerHTML = `Last Updated: ${modDate}`;
}

window.onload=function(){
   getDate();
   getModified();
}