import { restaurant } from "./Arrays.js";
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, j] of menu.entries()) console.log(`${i + 1}: ${j}`);
// console.log([...menu.entries()]);
