"use strict";
import { restaurant } from "./Arrays.js";

//console.log(-1 || "Jonas");
// Logical operators can use any data type
// return any data type and can short-curcuit
//short curcuit for OR means if the first value
//is truthy than it immediatlly returns that value
// negative numbers are truthy while 0 is not

restaurant.guests = 0;
const okay = restaurant.guests || 10;
console.log(okay);

// fix for up top
const guestsCorrect = restaurant.guests ?? 10;
console.log(guestsCorrect);

// if set to null the nullish operator will check if null or undefined, if not the value will be truthy
// if it is null or undefined the value is falsy, and the next value is returned
restaurant.guests = null;
const guestsNull = restaurant.guests ?? 10;
console.log(guestsNull);

// ---------------------&&----------------------
// short circuit for && operator means
// return the first falsy value
// if no falsy value return the last value

// console.log("hello" && 23 && null && 0);
console.log("---------------------AND-----------------");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza &&
//   restaurant.orderPizza("cheese", "mushrooms", "spinach");
//-------------------------------------------------
