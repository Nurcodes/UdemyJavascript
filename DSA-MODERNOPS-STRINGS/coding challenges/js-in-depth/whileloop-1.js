let loggedIn = false;
let i = 0;

while (!loggedIn) {
  console.log("incorrect log in credentials");
  i++;
  if (i >= 3) loggedIn = true;
}
console.log("Successfully logged in");
