/*
/////////////////////////////////////////////////////////
// WORKING WITH STRINGS - PART 1

const airline = "TAP Air Portugal";
const plane = "A320";

airline.length; //valid
"B737".length; //valid
"B737"[0]; //valid

  //strings have built in methods much like arrays

  //1. indexOf -- returns the first occurance of arguement
  //2. lastIndexOf -- returns the last occurance of arguement

// console.log(airline.indexOf("Portugal"));
// console.log(plane.lastIndexOf("0"));


  //slice method needs indexes of a string first so those //other methods are useful

  //slice returns a substring

  //first value is index to start at and second
  //value is where to stop also not included
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// slice(7)
// console.log(airline.slice(7));

// console.log(airline.slice(4, 8));


//can also do negative indexes

//console.log(airline.slice(1, -1));

// const checkMiddleSeat = (seat) => {
//   // B and E are middle seats
//   if (seat.slice(-1) == "B" || seat.slice(-1) == "E")
//     console.log("You are in the middle seat :(");
//   else {
//     console.log("You are not in the middle :)");
//   }
// };
//checkMiddleSeat("11E");
*/
/*
 * Strings are primatives why do methods work on them??
 *
 * Because Javascript is smart
 * it works by
 * when ever we call a method on a string
 * Javascript automatically converts that string primative
 * to a string object and that object is where the methods are called
 * this method is called boxing - takes the string and places it in a box
 * this happens
 * 
 *      console.log(typeof new String("jonas"));
console.log(typeof new String("jonas").slice(1));
console.log(typeof airline);
 */
/*
////////////////////////////////////////////////////
///WORKING WITH STRINGS - PART 2

//Fix capitalization in name

const passenger = "AbdIfaTAh"; //Abdifatah;
const passengerLower = passenger.toLowerCase(); //abdifatah
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passenger, passengerLower, passengerCorrect);

// make function for this
const fixPassenger = (passenger) => {
  const low = passenger.toLowerCase();
  console.log(low[0].toUpperCase() + low.slice(1));
  // return 0;
};
// fixPassenger("jONaS");

// Comparing emails example
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

const checkEmail = (loginEmail, email) => {
  // comapre with login email starting from f un l
  // also lowercase loginEmail
  const trimmedEmail = loginEmail.toLowerCase().trim();
  const verdict = email == trimmedEmail ? "CORRECT" : "WRONG";
  console.log(`The email provided <${trimmedEmail}> is the ${verdict} email`);
};
// checkEmail(loginEmail, email);

// replacing parts of strings
const priceGb = "288,97#";
const priceUS = priceGb.replace(",", ".").replace("#", "$");
console.log(priceUS);

const announcment = "All passengers come to boarding door 23, Boarding door 23";
console.log(announcment.replace(/door/g, "gate"));

// Booleans - includes, startsWith, endsWith
const plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("A32"));
console.log(plane.endsWith("neo"));

//Practice excercise using boolean methods
const checkBaggage = (items) => {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("You are NOT allowed on board");
  else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
*/
/*
////////////////////////////////////////////////////
///WORKING WITH STRINGS - PART 3
 */
// splitting a string by a split character
console.log("a+very+nice+string".split("+"));

// now we can use the power of destrucuring to create variables from the array received from the split string

const [first, last] = "Abdifatah Nur".split(" ");
// console.log(fir);

// join method
const newName = ["Mr.", first, last.toUpperCase()].join(" ");
console.log(newName);

//capitalize a string with join, split and splice

const capitalizeName = (word) => {
  const names = word.split(" ");
  const namesUpper = [];
  for (let n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // console.log(...namesUpper);
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("this should be capitalized");
capitalizeName("abdifatah nur");

//Padding a string
const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(40, "+"));
console.log(message.length);

// create a function which takes a number and pads it until the last 4 digits
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  console.log(last.padStart(str.length, "*"));
};

maskCreditCard(45466453);
maskCreditCard("454214345466453");

// Repeat method
const message2 = "Bad weather.. All ";

// Tech with nadir technical interview question #1 - easy
const letter = "everytwoletters";
const e = (letters) => {
  // const l = [];
  let l = "";
  for (let i = 0; i < letters.length; i++) {
    if (i % 2 === 0) {
      // l.push(letters[i].toUpperCase());
      l += letters[i].toUpperCase();
    } else {
      // l.push(letters[i].toLowerCase());
      l += letters[i].toLowerCase();
    }
  }
  return l;
};
console.log(e("HELLO???"));
