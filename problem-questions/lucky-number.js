function printDiamondPattern(luckyNumber) {
  for (let i = 0; i < luckyNumber; i++) {
    let line = "";

    // Print leading spaces
    for (let j = 0; j < luckyNumber - i - 1; j++) {
      line += "  ";
    }

    // Print the numbers and alphabets
    let counter = 1;
    for (let j = 0; j < i + 1; j++) {
      line += counter + " ";
      counter += 2;
    }

    counter = "A".charCodeAt(0);
    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(counter) + " ";
      counter += 1;
    }

    console.log(line);
  }

  // Print the bottom half of the diamond
  for (let i = 0; i < luckyNumber - 1; i++) {
    let line = "";

    // Print leading spaces
    for (let j = 0; j < i + 1; j++) {
      line += "  ";
    }

    // Print the numbers and alphabets
    let counter = 1;
    for (let j = 0; j < luckyNumber - i - 1; j++) {
      line += counter + " ";
      counter += 2;
    }

    counter = "A".charCodeAt(0);
    for (let j = 0; j < luckyNumber - i - 2; j++) {
      line += String.fromCharCode(counter) + " ";
      counter += 1;
    }

    console.log(line);
  }
}

function main() {
  const luckyNumber = parseInt(prompt("Please enter your lucky number: "));
  printDiamondPattern(luckyNumber);
}

main();
