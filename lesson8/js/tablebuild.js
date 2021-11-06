import Period from './period.js'

let heads = ['Period', 'Performance', 'Goal'];
let pds = ['August', 'September', 'October', 'November', 'Black Friday', 'December'];
let sls = [3590, 4420, 4870, 8610, 3200, 6820];
let slgs = [4000, 5000, 5000, 7500, 3200, 7500];

let tabl = document.querySelector('.table');

const createTable = () => {
   let t = document.createElement('table');
   t.className = 'sales';
   let tHead = document.createElement('thead');
   tHead.className = 'table-head';
   let tTitle = document.createElement('tr');
   let tTitleRow = document.createElement('th');
   tTitleRow.colSpan = `${heads.length}`;
   tTitleRow.scope = 'colgroup';
   tTitleRow.innerHTML = 'ACME Wildwest'
   tTitle.append(tTitleRow);
   tHead.append(tTitle);
   heads.forEach(head => {
      let c = createCell(head, 'th', 'head');
      tHead.append(c);
   })
   let tBody = document.createElement('tBody');
   pds.forEach((period, index) => {
      let p = new Period(period, sls[index], slgs[index]);
      let r = createRow(p);
      tBody.append(r);
   })
   let tFoot = document.createElement('tfoot');
   let tFootRow = document.createElement('th');
   tFootRow.innerHTML = 'Compiled 11.06.2021 by bSmith'
   tFootRow.colSpan = 3;
   tFootRow.scope='colgroup';
   tFoot.append(tFootRow);
   t.append(tHead, tBody, tFoot);
   tabl.append(t);
}

const createRow = (period) => {
   let trow = document.createElement('tr');
   let c1 = createCell(period.name, 'td', 'c1');
   let c2 = createCell(period.performance, 'td', 'c2');
   let c3 = createCell(period.goal, 'td', 'c3');
   if (period.met) {
      c3.className = 'met';
   }
   if (period.exact) {
      c2.colSpan = 2;
      c3.colSpan = 0;
      trow.append(c1,c2);
   }
   else
      trow.append(c1, c2, c3);
   return trow
}

const createCell = (cell, type, loc) => {
   let c = document.createElement(type);
   if (loc == 'head') {
      c.scope = 'col';
      c.innerHTML = cell;
   }
   else if (loc == 'c1' ){
      c.scope = 'row';
      c.innerHTML = cell;
   }
   else {
      c.innerHTML = `$${cell.toLocaleString('en-US')}`
   }
   return c;
}

createTable();