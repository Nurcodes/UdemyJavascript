/**
 * Sets are a collection of unique values
 */

/**
 * new Set([iterable]) - creates the set if from an iterable, it copies the values into the set
 *
 * set.add(value) - adds a value, returns the set itself
 *
 * set.delete(value) - removes the value, returns true if the value existed at the moment of the call, otherwise false
 *
 * set.has(value) - returns true if the value exists, otherwise false
 *
 * set.clear() - removes everything from the set
 * set.size - is the elements count
 */
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

// get size of set
// console.table(ordersSet.size);
// check if item is in set
// console.log(ordersSet.has("Pizza"));
// add to the set
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");

// delete from the set
ordersSet.delete("Pizza");

// console.table(ordersSet);

const ray = [...ordersSet];
// console.table(ray);

const jobs = ["waiter", "chef", "manager", "waiter", "chef", "reception"];
const uniqueJobs = [...new Set(jobs)];
console.log(uniqueJobs.entries);
for (let [i, j] of uniqueJobs.entries()) console.log(i, j);

const uniqueStr = new Set(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quas a optio tempora, voluptate sunt inventore. Quia nemo laboriosam quae."
);
const { i } = uniqueStr;
console.log(!!("foo" && 4));

function A() {
  console.log("called A");
  return true;
}

function B() {
  console.log("called b");
  return false;
}
console.log(A() && B());
// ====================================MAP STUF-------------------------------------------------------
// const newobj = { name: "abdifatah", age: 22 };
// const mp = new Map([
//   ["one", 1],
//   [2, "two"],
//   [newobj, 10],
// ]);
// mp["4"] = "four";
// // console.log(mp.get(newobj), mp.get("one"), mp.get(2), mp.get("4"));

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {}; // try to use an object

// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// // console.log(visitsCountObj);

// // for (let val of mp.values()) {
// //   console.log(val);
// // }

// for (const keys of mp.keys()) {
//   console.log(keys);
// }
// const mp1 = new Map();
// console.log("-------------------------------");
// for (const [key, val] of mp.entries()) {
//   mp1.set(key, val);
//   console.table(mp1);
// }
