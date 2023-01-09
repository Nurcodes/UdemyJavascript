"use strict";

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Pizza",
  owner: "Giovanni Rossi",
};
// OR assignment operator
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator fixes the issue of number
// 0 being falsy when used with || operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 20;

// LOGICAL AND OPERATOR SHORT CIRCUITS WHEN THE FIRST VALUE IS FALSY, BUT HERE THAT IS NOT THE CASE FOR REST2, UNLIKE REST 2
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest2.owner);
console.log(rest1.owner);

// console.log(rest1.numGuests, rest2.numGuests);
