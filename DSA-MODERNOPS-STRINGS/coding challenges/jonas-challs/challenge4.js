document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, sec] = row.toLowerCase().trim().split("_");
    const output = `${first}${sec.replace(sec[0], sec[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${"✔".repeat(i + 1)}`);
  }
});
