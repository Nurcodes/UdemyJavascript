'use strict';
// Default paramaters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 99 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
// createBooking('LH123');
// createBooking('LH123', undefined, undefined);

//Pass by value or by reference

const flight = 'LH234';
const abdifatah = {
  name: 'Abdifatah Nur',
  passport: 125431665732,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  passenger.passport === 125431665732
    ? console.log('Check in')
    : console.log('Wrong passport');
};

checkIn(flight, abdifatah);
console.log(abdifatah.name, flight);

// flight is passing a copy to the function
//same as
const flightNum = flight; // this is assigning the value held within flight
const passenger = abdifatah; //this is assigning the reference to the value stored in abdifatah

const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 10000000000);
  console.log(person.passport);
};
newPassport(abdifatah);
checkIn(flight, abdifatah);

//First-class vs. Higher-order functions
//Javascript treats functions as first-class citizen
// functions are simply values hence we can store
// them in variales and object properties

// Higher-order function is either a function which returns
// another function or receives another function as input
// 'btnClose.addEventListner('click', greet)'
// eventlistner is the higher-order function while the greet
// is the callback function

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = str => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// Js  uses callback all the time
// const hi = () => console.log('👋🏽');
// document.body.addEventListener('click', hi);

// ['Jonas', 'Martha', 'Adam'].forEach(hi);

// create a callback function which creates an obj from a name
// const newObj = function () {
//   const obj = { name: '1', age: 22 };
//   console.log(obj);
// };

// document.getElementById('obj').addEventListener('click', newObj);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHi = greet('Hi');
greeterHi('Abdifatah');

greet('Hello')('Jonas');

// challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('John Cena');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Abdifatah Nur');
lufthansa.book(635, 'Jonas Schmedtmann');
console.log(lufthansa.bookings);

const book = lufthansa.book;

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Three function methods which tell js who to attach the this keyword to - call, apply, bind

// does not work
// book(23, 'Sarah Williams')

book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);
book.call(lufthansa, 289, 'Maria Stokes');
console.log(lufthansa);

//apply method, takes an array instead of list
const flightData = [893, 'Mary Cooper'];

const ethopianAir = {
  airline: 'Ethopian Airlines',
  iataCode: 'EA',
  bookings: [],
};
//apply takes an array as second arguement
book.apply(ethopianAir, flightData);
console.log(ethopianAir);
const flightData2 = [532, 'Mark Henry'];
//same as apply but we can use the spread operator
book.call(ethopianAir, ...flightData2);
console.log(ethopianAir.bookings);

//Bind method allows us to manually set the this keyword for the function

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookEA = book.bind(ethopianAir);
//Bind will return a new function binded with the this keyword of the object passed in
//Can also pass in list of arguements to be already set in the return function
const bookEW100 = book.bind(euroWings, 100);
//Partial application
bookEW100('Mike Amiri');
bookEW100('Yves Sain lauren');
bookEW100('Christian Dior');
console.log(euroWings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//This keyword always points to the element on which
//the handler is attached to
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
//addVat = value => value + value * 0.23
// console.log(addVat(89));

//create a function which returns a function which uses bind
const higherOrder = rate => value => value + value * rate;

// console.log(higherOrder()(200));

const addVat2 = higherOrder(0.3);
console.log(addVat2(100));
// can also call the whole thing like this
console.log(higherOrder(0.5)(100));

//Immediatly Invoked Function Expressions
//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

// {
//   // const isPrivate = True;
//   var notPrivate = True;
// // }
// console.log(isPrivate); //ReferenceError Because const is block scoped
// console.log(notPrivate); //True because var completely ignores block scope

const fn = function () {
  if (true) var i = 1;
  console.log(i);
};
fn();

(function () {
  if (true) var i = 1;
  console.log(i);
})();
