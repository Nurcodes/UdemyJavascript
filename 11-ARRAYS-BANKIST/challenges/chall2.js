const calcAverageHumanAge = (arr) =>
  //map then filter then reduce
  arr
    .map((dog) => {
      return dog <= 2 ? 2 * dog : 16 + dog * 4;
    })
    .filter((dog) => (dog >= 18 ? dog : false))
    .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);
