////////////////////
//CLOSURES
///////////////////////

const secureBooking = function () {
  let passengerCount = 0;
  console.log(passengerCount);

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

//Any function has access to the variable environment
//of the ec in which it was created
// booker();
// booker();
// booker();

// console.dir(booker);

//Examples of closures

//Example 1.
let f; //global scope <f:variable>

const g = function () {
  //global scope <g:(f)>
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();
//1554
g();
//f - re-assigned gets a new closure which is a
f();
46;

// Example 2

const boardPassengers = (n, wait) => {
  // const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
    console.log(`Waited ${wait} seconds`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 900;

boardPassengers(180, 2);
