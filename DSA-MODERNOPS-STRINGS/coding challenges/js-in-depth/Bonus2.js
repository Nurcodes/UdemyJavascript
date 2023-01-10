const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const seenItems = new Map();

for (let i = 0; i < numbers.length; i++) {
  if (seenItems.has(numbers[i])) {
    //if seenItems has numbers[i] example.. 15
    // we log the current index and the index of where we previosly saw that number
    console.log(i, seenItems.get(numbers[i]));
  } else {
    //we assign the current number at index i as the key and the value will be the index of i currently
    seenItems.set(numbers[i], i);
    console.table(seenItems);
  }
}
// console.table(seenItems);
