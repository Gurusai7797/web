// let val = document;

// val = document.all;
// val = document.all[0];
// val = document.all.lenght;
// val = document.head;
// val = document.body;
// val = document.domain;
// val = document.characterSet;

// let srs = document.scripts;

// let srsArr = Array.from(srs);

// srsArr.forEach(function (sr) {
//   console.log(sr.getAttribute('src')[2]);
// });

// console.log(srs);
// ========================================================================================================================================
// select by ID document.getElementById()

// console.log(document.getElementById('task-title'));

// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').textContent = 'task list';
// document.getElementById('task-title').innerText = 'my list';
// document.getElementById('task-title').innerHTML = '<span> hellow tasks</span>';
// // document.getElementById('task-title').style.display = 'none';
// =======================================================================================================================================
// documnent.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.task-title'));
// console.log(document.querySelector('h1'));

// document.querySelector('li').style.color = 'red';
// =======================================================================================================================================
// multi selector's

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// const ulli = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');

// console.log(ulli);
// =======================================================================================================================================
// get element by tag name
// const items = document.getElementsByTagName('li');

// console.log(items);
// console.log(items[0]);

// //converting html collection into array

// items = Array.from(items);
// items.reverse();
// //=======================================================================================================================================
// const i = document.querySelectorAll('li'); //don't need to convert to an array it's an array

// //example to get odd even thing

// const liOdd = document.querySelectorAll('li:nth-child(odd)');

// liOdd.forEach(function (item, index) {
//   item.style.background = '#ccc';
// });

// console.log(i);
