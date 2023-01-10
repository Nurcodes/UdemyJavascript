"use strict";
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log("--------------T1-------------------");
const events = [...new Set(gameEvents.values())];
console.log(events);

console.log("---------------T2--------------------");
gameEvents.delete(64);
console.log(gameEvents.has(64));

console.log("----------------T3---------------------");
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} mins`
);
console.log("-------------------------T4------------------");
for (let [x, y] of gameEvents) {
  const halfTime = 45;
  console.log(halfTime > x ? `[FIRST HALF] ${x}: ${y}` : `${x}: ${y}`);
}
