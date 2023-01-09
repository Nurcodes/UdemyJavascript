// // // Learning arrays part 2
// // //ADD ELEMENETS Push method, unshift method
// // // const friends = ["abdifatah", "Harun", "maryam", "adnan"];
// // //Returns length of new array, and adds new element
// // // let test = friends.push("Jay");
// // // for (let i in friends)
// // // {
// // // 	console.log(`${friends[i]}`);
// // // }
// // // friends.unshift("Mark");
// // // console.log(friends);
// // // // Remove elements
// // // friends.pop() //Last
// // // console.log(friends);
"use strict";
// // const removefirst = friends.shift(); //removes first
// // console.log(friends);
// // //INDEX OF AND INCLUDES
// // console.log(friends.indexOf('maryam'));
// // console.log(friends.indexOf('abdifatah'));

// // //includes
// // console.log(friends.includes("Mark"));

// "use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschett", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    // console.log(
    //   `Order received ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(
      `Here is your hot pizza topped with ${mainIng} and also ${otherIng} `
    );
  },
};
const ingrediants = ["mushrooms", "aspargus", "cheese"];
// restaurant.orderPasta(...ingrediants);

// restaurant.orderPizza("mushrooms", "pineapple", "spinach", "onion");
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
// });

// REST OPERATOR ////////////////////////////////////////
//BECAUSE ON THE LEFT SIDE OF THE =
const [aa, bb, ...others] = [1, 2, 3, 4, 5];
// console.log(aa, bb, others);

const [foc, , Garlic, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
// console.log(foc, Garlic, otherFood);

// Objects
const { sat, ...weekDays } = { ...restaurant.openingHours };
// console.log(weekDays);
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // console.log(sum);
};
add(2, 5);
add(5, 9, 1);
add(2, 3, 5, 6, 7, 8, 5, 4);
const xx = [3, 4, 5];
add(...xx);

// SPREAD OPERATOR //////////////////////////////////////

const ray = [5, 6, 78, 9];
let newRay = [100, 150, ...ray];
// console.log(...newRay);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(...newMenu);

// copy array - shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

// join arrays together
const menuNew = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(...menuNew);

// Iterables are arrays, maps, sets and strings but
// not objects!!
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(...letters);

//Objects
const newRestaurant = {
  foundingYear: 1998,
  ...restaurant,
  founder: "Guiseppe",
};
// console.log(newRestaurant);
// console.log(restaurant);

// create an object from a string using spread
// first create the variable
// second do the darn thing
const test = "Abdifatah";
const newObj = { ...test };
// console.log(newObj);

// DESTRUCTURING OBJECTS
const { name, openingHours, catagories } = restaurant;
// console.log(name, openingHours, catagories);
// THIS WAY ADDS NEW VARIABLE NAMES
const {
  name: restaurantName,
  openingHours: hours,
  catagories: tags,
} = restaurant;
// console.log(restaurantName, hours);

// DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(a, b);

// NESTED OBJECTS
const {
  fri: { open: o = [], close: c = [] },
} = openingHours;
// console.log(o, c);
// DESTRUCTURING ARRAYS =============================
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // array destructoring
// const [x, y, z] = arr;
// console.log(x, y, z);

// // can skip a spot if needed
// let [main, , secondary] = restaurant.catagories;
// console.log(main, secondary);

// // swapping array entries, no temp variable needed
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return values from a function
// const [one, two] = restaurant.order(2, 0);
// console.log(one, two);

// // Nested desctructuring
// // taking first and last of the array
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// // taking the first and also destructoring the nested array
// const [n, , [l, m]] = nested;
// console.log(i, j);
// console.log(n, l, m);

// // Default values
// const [p = 1, q, r = 1] = [8];
// console.log(p, q, r);
export { restaurant };
