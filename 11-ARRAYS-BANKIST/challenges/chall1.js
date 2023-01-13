const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = (julia, kate) => {
  const juliaDataFix = julia.slice(1, 3);
  // juliaDataFix.splice(0, 1);
  // juliaDataFix.splice(-2);
  console.log(juliaDataFix);
  const allData = juliaDataFix.concat(kate);
  allData.forEach((val, idx) => {
    const str =
      val >= 3
        ? `Dog number ${idx + 1} is an adult, and is ${val} years old`
        : `Dog number ${idx + 1} is still a puppy🐶`;
    console.log(str);
  });
};
checkDogs(juliaData, kateData);
console.log("------------------Test2-------------");
checkDogs(juliaData2, kateData2);
