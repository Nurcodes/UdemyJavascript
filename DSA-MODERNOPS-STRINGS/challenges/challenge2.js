const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/**
 * 1. Loop over the game.scored and print each player name to the console, along with each goal number (Example:
 * "Goal 1: Lewandowski")
 */

/**
 * Task 1 answer: Going to have to use the for of loop and call the entries on game.scored
 */
console.log("-----------------T1-----------------");
const goals = game.scored.entries();
for (let [goal, player] of goals) {
  console.log(`Goal ${goal + 1}: ${player}`);
}
console.log("-----------------FINISHED----------------");
// ---------------------------------------------------------

/**
 * 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages)
 *
 * Task 2 answer: use objects.values to get an array of the values from odds object, then for of loop to add up values into avg variable then /= by odd.values.length
 */
console.log("-----------------T2----------------");
const vals = Object.values(game.odds);
console.log(vals);
let avg = 0;
for (let x of vals) {
  avg += x;
}
avg /= vals.length;
console.log(avg);
console.log("------------------FINISHED----------------");
//-----------------------------------------------------------

/**
 * Print the 3 odds to the console, but in a nice formatted way, exactly like this:
 *  odd of victory Bayern Munich: 1.33
 *  odd of draw: 3.25
 *  odd of victory Borrussia Dormund: 6.5
 * Get the team names directly from the game object, don't hardcode them (except for draw). HINT: Note how the odds and the game objects have the same property names
 */
console.log("------------------------T3-------------------");

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `${game[team]} victory`;
  console.log(`Odd of ${teamStr} is ${odd}`);
}

// console.log(Object.entries(game.odds));
console.log("-------------------------------BONUS------------------------");
/**
 * BONUS: Create an object called 'scorers
 * which contains the names of the
 * players who scored as properties, and
 * the number of goals as the value. In
 * this game, it will look like this
 * {
 *    Gnarby: 1,
 *    Hummels: 1,
 *    Lewandowski: 2
 * }
 */
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.table(scorers);
