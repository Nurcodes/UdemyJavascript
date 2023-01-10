import { restaurant } from "./Arrays.js";

console.log(restaurant.openingHours.mon?.open || "It doesnt open on monday");
console.log(restaurant.openingHours.yesterday?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "<CLOSED>";
  const close = restaurant.openingHours[day]?.close ?? "<NOT OPEN>";
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// optional chaining for methods
console.log(restaurant.order?.(0, 1) ?? "Shit don't exist");
console.log(restaurant.orderRizz?.(0, 1) ?? "Shit don't exist");

// Arrays
//const users = [{ name: "Jonas", email: "hello@gmail.com", id: 1 + 1 }];
const users = [1, 2];

console.log(users[0]?.name ?? "Object doesnt exist");
