const banana = {
  name: "banana",
  quantity: 1,
  price: 1.95,
};

const apple = { name: "apple", quantity: 1, price: 1.45 };

const candy = { name: "candy", quantity: 1, price: 3.5 };

const store = new Map();

store
  .set("storeNumber", 5)
  .set("locationCity", "Milan")
  .set("locationCountry", "Italy")
  .set("products", [banana, apple, candy]);

console.log(store);
console.log("-------------------------");
for (let x of store.get("products")) {
  console.log(x);
}
console.log("-------------------------");
console.log(store.get("products")[2]);

store.get("products")[0].price = 1.75;
store.get("products")[2].price = 4.99;
console.log(store.get("products"));
console.log("-------------------------");
