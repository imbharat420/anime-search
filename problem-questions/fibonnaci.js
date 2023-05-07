function generateFibonacci(num) {
  let series = [0, 1];
  for (let i = 2; i < num; i++) {
    let nextNum = series[i - 1] + series[i - 2];
    if (nextNum > num) {
      break;
    }
    series.push(nextNum);
  }
  return series;
}

let userInput = parseInt(prompt("Enter a number: "));
let result = generateFibonacci(userInput);
console.log(result);
