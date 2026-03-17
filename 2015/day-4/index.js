import fs from 'fs';
import md5 from 'md5';

const input = fs.readFileSync('./input.txt', 'utf8');

function main(zeros) {
  let index = 1;

  while (true) {
    const hash = md5(`${input}${index}`);

    if (hash.startsWith(zeros)) {
      return index;
    }

    index += 1;
  }
}

// part one
console.log(main('00000'));

// part two
console.log(main('000000'));
