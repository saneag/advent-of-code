import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8');

const TOGGLE = 'toggle';
const TURN_ON = 'turn on';
const TURN_OFF = 'turn off';
const THROUGH = 'through';

function generateArray() {
  return Array.from({ length: 1000 }, () =>
    Array.from({ length: 1000 }, () => 0),
  );
}

function partOne() {
  const lights = generateArray();

  function changeLights(line, splitKey) {
    const newLine = line.split(`${splitKey} `)[1];
    const [firstCoordinates, lastCoordinates] = newLine.split(` ${THROUGH} `);

    const [x1, y1] = firstCoordinates.split(',');
    const [x2, y2] = lastCoordinates.split(',');

    for (let row = Number(x1); row <= Number(x2); row++) {
      for (let col = Number(y1); col <= Number(y2); col++) {
        if (splitKey === TURN_ON) {
          lights[row][col] = 1;
        } else if (splitKey === TURN_OFF) {
          lights[row][col] = 0;
        } else {
          lights[row][col] = lights[row][col] === 0 ? 1 : 0;
        }
      }
    }
  }

  input.split('\n').forEach((line) => {
    if (line.includes(TURN_ON)) {
      changeLights(line, TURN_ON);
    }

    if (line.includes(TURN_OFF)) {
      changeLights(line, TURN_OFF);
    }

    if (line.includes(TOGGLE)) {
      changeLights(line, TOGGLE);
    }
  });

  return lights.flat().filter((light) => light === 1).length;
}

console.log(partOne());

function partTwo() {
  const lights = generateArray();

  function changeLights(line, splitKey) {
    const newLine = line.split(`${splitKey} `)[1];
    const [firstCoordinates, lastCoordinates] = newLine.split(` ${THROUGH} `);

    const [x1, y1] = firstCoordinates.split(',');
    const [x2, y2] = lastCoordinates.split(',');

    for (let row = Number(x1); row <= Number(x2); row++) {
      for (let col = Number(y1); col <= Number(y2); col++) {
        if (splitKey === TURN_ON) {
          lights[row][col] += 1;
        } else if (splitKey === TURN_OFF) {
          lights[row][col] = lights[row][col] === 0 ? 0 : lights[row][col] - 1;
        } else {
          lights[row][col] += 2;
        }
      }
    }
  }

  input.split('\n').forEach((line) => {
    if (line.includes(TURN_ON)) {
      changeLights(line, TURN_ON);
    }

    if (line.includes(TURN_OFF)) {
      changeLights(line, TURN_OFF);
    }

    if (line.includes(TOGGLE)) {
      changeLights(line, TOGGLE);
    }
  });

  return lights.flat().reduce((acc, curr) => acc + curr, 0);
}

console.log(partTwo());
