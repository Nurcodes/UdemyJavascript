const cities = ["La", "Tyo", "Ny"];

let [...upper] = cities.map((item, idx, arr) => [item, idx, arr]);
// console.table(cities);
// console.table(upper);
// console.log(upper.map((i, idx, arr) => new Map(arr)));

const numbers = [5, 10, 15, 20, 25];

const timesTen = numbers.map((number) => {
  number * 10;
});
/**
 * Make sure to always add a return statement
 * otherwise undefined is returned for every call
 */

console.log(timesTen);
