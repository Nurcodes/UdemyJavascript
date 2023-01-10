import { restaurant } from "./Arrays.js";
import { openingHours } from "./enhanced-objLiterals.js";

const props = Object.keys(openingHours);
let openStr = `We are open ${props.length} days`;
for (const day of props) {
  openStr += ` ${day},`;
}
console.log(openStr);

const vals = Object.values(openingHours);
// console.log(...vals);

const all = Object.entries(openingHours);
console.log(all);

for (let [i, { open, close }] of all) {
  /* TO DESTRUCT AN OBJECT THE PROPERTY NAMES MUST BE THE SAME!!!!
   */
  console.log(
    `On ${i} we open at ${open ?? "<N/A>"} and close at ${close ?? "<N/A>"}`
  );
}

const simple = {
  age: 22,
  name: "Abdulfatah",
  time: {
    one: "one",
    two: "two",
  },
};

for (let [key, { one, two }] of Object.entries(simple)) {
  console.log(`${one} and ${two}`);
}
console.log(Object.entries(simple));
