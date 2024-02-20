//Dom selection

//document.getElementById()
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Nicko Cahya';

//document.getElementByTagName()
// -> HTMCollections
// const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

//document.getElementsByClassName()
//-> HTMLCollections

// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari javascript';

//document.querySelector()-> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui javascript';

//document.querySelectorAll()
// const p = document.querySelectorAll('p');
// p.style.backgroundColor = 'lightblue';

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';
