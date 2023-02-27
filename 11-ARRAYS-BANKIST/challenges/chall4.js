// coding challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 273, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//step 1
dogs.forEach((dog) => {
  dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28);
  console.log(dog.recommendedFood);
});

//Step 2
const dogSarah = dogs
  .filter((dog) => dog.owners.includes("Sarah"))
  .reduce(
    (result, dog) =>
      (result =
        dog.recommendedFood === dog.curFood
          ? "Eating recommended amount"
          : dog.recommendedFood > dog.curFood
          ? "Eating to little"
          : dog.recommendedFood < dog.curFood
          ? "Eating to much"
          : "unkown"),
    ""
  );

//step 3
const ownersEatToMuch = dogs
  .filter((dog) => {
    return dog.curFood > dog.recommendedFood ? dog.owners : false;
  })
  .reduce((acc, dog) => {
    acc.push(dog.owners);
    return acc;
  }, [])
  .flat();

const ownersEatToLittle = dogs
  .filter((dog) => {
    return dog.curFood < dog.recommendedFood ? dog.owners : false;
  })
  .reduce((acc, dog) => {
    acc.push(dog.owners);
    return acc;
  }, [])
  .flat();

//Step 4
const [Matilda, Sarah, John] = [...ownersEatToMuch];
const [Alice, Bob, Michael] = [...ownersEatToLittle];
console.log(`${Matilda} and ${Sarah} and ${John}'s dogs eat too much!`);
console.log(`${Alice} and ${Bob} and ${Michael}'s dogs eat too little!`);

//Step 5
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

//Step 6 - Some Method

const dogsOkayAmount = dogs.some(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

//step 7 - filter Method
console.log(dogsOkayAmount);
const dogsOkayAmountArray = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

//Step 8 - Sort accending order
const sortedDogs = dogs
  .slice()
  .map((dog) => {
    return dog.recommendedFood;
  })
  .sort((a, b) => (a < b ? -1 : 1));
console.log(sortedDogs);
