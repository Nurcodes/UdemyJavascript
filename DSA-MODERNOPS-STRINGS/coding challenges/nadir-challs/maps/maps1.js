/*

    1. Create a Map called 'mexico' with the follow entries
      -id => 24
      -name => 'mexico'
      -capital => 'mexico city'
      -neighbours => ['USA', 'Guatemala', 'Belize']
    
    2. Print out 'mexico' to the terminal

    3.Change 'id' to be 25

    4. Add 'Honduras' to the list of neighbours to 'mexico'

    5. Print out 'mexico' to the terminal again

 */

const mexico = new Map([
  ["id", 24],
  ["name", "mexico"],
  ["capital", "mexico city"],
  ["neighbours", ["USA", "Guatemala", "Belize"]],
]);

console.table(mexico);
mexico.set("id", 25);
mexico.get("neighbours").push("Honduras");
console.table(mexico);
