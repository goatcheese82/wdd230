const getDate = () => {
   let date = new Date;
   document.getElementById("year").innerHTML = `&#169 ${date.getFullYear()}`;
}

const getModified = () => {
   let modDate = document.lastModified;
   document.getElementById("modified-date").innerHTML = `This page was last modified on: ${modDate}`;
}