//TYPES OF EVENTS AND EVENTHANDLERS

/**
 * Basically a signal generated by a dom node
 * means something has happened
 * anything of importance that happens on our webpage
 * generates an event
 *
 * We can than listen for them with eventlistners
 *
 * events always happen doesnt matter if listen for them
 * or not
 *
 * Mouse enter event first
 *
 * can also remove events - here the event is removed after is runs 1 time
 *
 * can also use something like a settimeout to remove it after sometime
 */

const h1 = document.querySelector('h1');

const alertH1 = e => {
  //like the hover event in css
  alert('addEventListener: Great! You are reading the heading');

  //Remove the event listener from the element
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

h1.onmouseenter = function (e) {
  console.log('Mouse enter');
};