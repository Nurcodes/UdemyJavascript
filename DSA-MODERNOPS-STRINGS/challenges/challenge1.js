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
let [players1, players2] = game.players;
console.log("-----------T1-----------");
console.log(players1, players2);
console.log("------------------------");

let [gk, ...fieldPlayers] = players1;
let [gk2, ...fieldPlayers2] = players2;
console.log("-----------T2-----------");
console.log(gk, fieldPlayers);
console.log(gk2, fieldPlayers2);
console.log("------------------------");

const allPlayers = [...players1, ...players2];
console.log("-----------T3-----------");
console.log(allPlayers);
console.log("------------------------");

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log("-----------T4-----------");
console.log(players1Final);
console.log("------------------------");

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log("-----------T5-----------");
console.log(team1, draw, team2);
console.log("------------------------");

const printGoals = function (...players) {
  console.log("------------T6------------");
  for (let player = 0; player <= players.length; player++) {
    console.log(players[player]);
  }
  console.log(`${players.length} goals were scored`);
};
console.log("-----------Running 2 Tests-------------");
printGoals("Davies", "Muller", "Lewandowski", "kimmich");
printGoals(...game.scored);
printGoals("Messi", "Pobga");
console.log("------------------------");

console.log("-----------T7 Last One!-------------");
team1 < team2 && console.log("team 1 is likely to win");

export { game };
