let correctValue = 586;

do {
  let trying = prompt("guess a number...");
  if (trying == correctValue) {
    break;
  }
} while (true);

console.log("you won...");