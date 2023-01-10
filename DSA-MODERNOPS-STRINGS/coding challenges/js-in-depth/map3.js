const houseForSale = new Map();

houseForSale
  .set("area", 940)
  .set("value", 320000)
  .set("streetName", "Fifth Street")
  .set("built", "2012")
  .set("owner", { name: "Blake", age: 29 })
  .set("offers", [290000, 295000, 315000, 312000]);

console.log("-----------T1----------");
console.log(houseForSale);

console.log("------------T2----------");
houseForSale.delete("built");
console.log(houseForSale);

console.log("-------------T3----------");
houseForSale.get("owner").age = 30;
console.log(houseForSale.get("owner"));

console.log("-------------T4-----------");

let arr = houseForSale.get("offers");
let result = arr.reduce((max, price) => {
  if (price > max) {
    return price;
  }
  return max;
}, 0);
// console.log(result);
houseForSale.set("sale price", 312000);

console.log(houseForSale);
