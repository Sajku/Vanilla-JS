"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
  let result = 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "a") counter++;
  }

  let length = s.length;
  let wordsInN = Math.floor(n / length);
  let r = n % length;

  result = wordsInN * counter;
  console.log(result);

  if (r != 0) {
    for (let i = 1; i <= r; i++) {
      if (s.charAt(i - 1) === "a") result++;
    }
  }

  console.log(result);
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const n = parseInt(readLine(), 10);

  let result = repeatedString(s, n);

  ws.write(result + "\n");

  ws.end();
}
