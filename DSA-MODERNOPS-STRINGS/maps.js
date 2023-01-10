/**
 * Map is a collection of keyed data items, just like an Object. But the main difference is that the Map allows keys of any type!!
 *
 * METHODS AND PROPERTIES
 * new Map() - creates the map
 *
 * map.set(key, value) - stores the value by the key
 *
 * map.get(key) - returns the value by the key, undefined if key doesn't exist in the map
 *
 * map.has(key) - returns true if the keys exists, otherwise false
 * map.delete(key) - removes the element(key/value pair) by the key
 * map.clear() - removes everything from the map
 * map.size - returns the current element count
 *
 * Also an array of key value pairs within arrays can be passed in such as:
 *  [
 *    [a, b],
 *    [c, d],
 *    [e, f],
 * ]
 */
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
};
const map = new Map();

// using this syntax limits the map back to a normal Object
// keys will only be strings/symbols etc..
// this also does not add to the size of the map??
const two = 2;
let one = 1;

map[one] = 1;
map[two] = 2;

map.set("you", "hi").set("me", "bye");
// console.log(map.size);

// MAPS CAN USE OBJECTS AS KEYS!!!
const obj = { name: "abdul" };
map.set(obj, 22);
// console.table(map);
// console.log(map.size);

//trying to do the same with an Object converts the value into a string
let john = { name: "john" };
let mark = { name: "mark" };
const obj1 = {};

obj1[john] = 1; // try to use john as the key
// console.log(obj1);
obj1[mark] = 2; // try to use mark as the key, john gets overwritten
// console.log(obj1); // {' [object Object] '} is written

//-------------------------------------------------------

const newMap = new Map([
  [john, "engineer"],
  [mark, "it"],
]);
// console.log(newMap);

const rest = new Map();
rest
  .set("name", "Classico Italiano")
  .set(1, "Fireze, Italy")
  .set(2, "Osaka, Japan")
  .set(3, "Melbourne, Australia")
  .set("Michalen Stars", 8)
  .set("Owner", john.name)
  .set("open", 8)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
// console.log(rest.get(true));

const time = 21;
rest.get(time > rest.get("open") && time < rest.get("close"));

const ray = [100, 200];
rest.set(ray, "test");

// console.log(rest);
/**
 * iterating over a map 3 methods...
 */
// for (let entry of rest) {
//   console.log(entry);
// }

// create map from object because Object.entries returns array of arrays key/value pairs
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// returning the map to an array works
// console.log([...hoursMap]);
// creates an object from map
// combine hoursMap and rest to create hoursrestObj
const { ...hoursrestObj } = {
  ...Object.fromEntries(hoursMap),
  ...Object.fromEntries(rest),
};
// Achieved by first spreading out the incoming iterators and using the rest operator to collapse everything back together
console.table(hoursrestObj);
// console.log(hoursrestObj);
// console.log(...Object.entries(openingHours));

const answer = 3;
// console.log(answer == 3 ? "correct" : "false");
