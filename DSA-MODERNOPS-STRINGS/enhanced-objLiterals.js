"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
  // third enhancment is we can compute property names now
  [weekdays[6]]: {},
};
console.log(openingHours);

const rest = {
  name: "Pizzeria",
  owner: "Abdulfatah",
  //Enhanced Object Literals allows us to drop the name of an outside object by just adding its name.
  openingHours,

  // no longer have to set a property to set a method
  sayHi(name = "Hello world") {
    console.log(`hello ${name}`);
  },
};
rest.sayHi("Abdulfatah");
