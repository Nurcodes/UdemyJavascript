const myConsole = new Map();

myConsole.set("log", (message) => console.log(message));

myConsole.get("log")("Hello there");

myConsole.set(1, "number one").set("1", "string one");

console.log(myConsole.get(1), myConsole.get("1"));

console.log(myConsole);
