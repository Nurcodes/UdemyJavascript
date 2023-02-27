//EVENT PROPAGATION: BUBBLING AND CAPTURING

/**
 * when an event is registered
 * it begins in a so-called capturing phase where the event is at the root
 * of the dom tree for that element.
 *
 * when it reaches the element that the eventlistener is attached to
 * its in the target phase and the eventhandler/callback can run
 *
 * after the event is handled it makes its way back up the dom tree in
 * a so-called bubbling phase this means all of the parent elements get the
 * event aswell. as if the event happend on the parent elements aswell
 *
 * so if we attach the same eventlistener on one of the parent elements
 * we would have that eventlistner also fire off and execute its call back
 * function
 *
 *
 */

// const h1 = document.querySelector('h1');

// h1.addEventListener('click', e => {
//   alert('Hello world');
// });

// const header1 = document.querySelector('header');
// header.addEventListener('click', e => {
//   alert('Hello world');
// });

const randomeInt = (min, max) =>
  Math.floor(Math.random() * (max - min - 1) + min);

const randomColor = () =>
  `rgb(${randomeInt(0, 255)}, ${randomeInt(0, 255)}, ${randomeInt(0, 255)})`;

// const link = document.querySelector('.nav__link');
const ul = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.target === this);

  //Stop event propogation
  e.stopPropagation();
});

ul.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(this === e.target);
});

nav.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
  console.log(e.target === this);
});
