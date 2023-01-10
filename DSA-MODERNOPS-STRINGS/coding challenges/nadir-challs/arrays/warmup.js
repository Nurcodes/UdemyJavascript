const planets = ["Mercury", "Venus", "Earth", "Mars"];

planets.push("Jupiter");
planets.unshift("Sun");
planets.length -= 2;
planets.shift();
planets.shift();
console.log(planets);
