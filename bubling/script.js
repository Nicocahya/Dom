// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// DOM Traversal
// const close = document.querySelectorAll('.close');

// const close = document.querySelectorAll('.close');

// for( let i = 0; i < close.length; i++ ) {
//     close[i].addEventListener('click', function(e) {
//         close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     });
// });

// const nama = document.querySelector('.nama');
// console.log(nama);
// console.log(nama.parentElement);
// console.log(nama.parentElement.parentElement);
// console.log(nama.parentNode);
// console.log(nama.nextSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.nextElementSibling.nextElementSibling);
// console.log(nama.previousElementSibling);

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
});
