import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8');

function partOne() {
  function hasAtLeastThreeVowels(line) {
    return line.match(/[aeiou]/g)?.length >= 3 || false;
  }

  function hasRepetitiveLetterInARow(line) {
    for (let i = 0; i < line.length - 1; i++) {
      if (line[i] === line[i + 1]) {
        return true;
      }
    }

    return false;
  }

  function hasSpecificStrings(line) {
    const specificStrings = ['ab', 'cd', 'pq', 'xy'];

    for (let i = 0; i < specificStrings.length; i++) {
      if (line.includes(specificStrings[i])) {
        return true;
      }
    }

    return false;
  }

  let numberOfNiceStrings = 0;

  input.split('\n').forEach((line) => {
    if (
      hasAtLeastThreeVowels(line) &&
      hasRepetitiveLetterInARow(line) &&
      !hasSpecificStrings(line)
    ) {
      numberOfNiceStrings += 1;
    }
  });

  return numberOfNiceStrings;
}

console.log(partOne());

function partTwo() {
  function hasPairOfTwoLetters(line) {
    for (let i = 0; i < line.length - 2; i++) {
      const twoChars = line.substring(i, i + 2);
      const regex = new RegExp(twoChars, 'g');

      if (line.match(regex).length >= 2) {
        return true;
      }
    }

    return false;
  }

  function hasRepetitiveLetter(line) {
    for (let i = 0; i < line.length - 2; i++) {
      if (line[i] === line[i + 2]) {
        return true;
      }
    }

    return false;
  }

  let numberOfNiceStrings = 0;

  input.split('\n').forEach((line) => {
    if (hasPairOfTwoLetters(line) && hasRepetitiveLetter(line)) {
      numberOfNiceStrings += 1;
    }
  });

  return numberOfNiceStrings;
}

console.log(partTwo());
