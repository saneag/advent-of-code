import fs from 'fs';

const UP = '(';
const DOWN = ')';

function partOne() {
  const input = fs.readFileSync('./partOne.txt', 'utf8');

  const openParentheses = input.replaceAll(DOWN, '');
  const closedParentheses = input.replaceAll(UP, '');

  return openParentheses.length - closedParentheses.length;
}

console.log(partOne());

function partTwo() {
  const input = fs.readFileSync('./partTwo.txt', 'utf8');

  const basementLevel = -1;
  let currentLevel = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === UP) {
      currentLevel += 1;
    } else {
      currentLevel -= 1;
    }

    if (currentLevel === basementLevel) {
      return i + 1;
    }
  }
}

console.log(partTwo());
