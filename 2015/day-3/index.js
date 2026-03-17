import fs from 'fs';

const NORTH = '^';
const SOUTH = 'v';
const EAST = '>';
const WEST = '<';

const input = fs.readFileSync('./input.txt', 'utf8');

let visitedPositions = new Map();

function markVisited(x, y) {
  visitedPositions.set(`${x},${y}`);
}

function wasVisited(x, y) {
  return visitedPositions.has(`${x},${y}`);
}

function partOne() {
  visitedPositions = new Map();

  let x = 0;
  let y = 0;
  let numberOfDeliveredPresents = 1;

  markVisited(x, y);

  input.split('').forEach((direction) => {
    switch (direction) {
      case NORTH:
        {
          if (!wasVisited(x, y + 1)) {
            markVisited(x, y + 1);
            numberOfDeliveredPresents += 1;
          }

          y += 1;
        }
        break;
      case SOUTH:
        {
          if (!wasVisited(x, y - 1)) {
            markVisited(x, y - 1);
            numberOfDeliveredPresents += 1;
          }

          y -= 1;
        }
        break;
      case WEST:
        {
          if (!wasVisited(x - 1, y)) {
            markVisited(x - 1, y);
            numberOfDeliveredPresents += 1;
          }

          x -= 1;
        }
        break;
      case EAST:
        {
          if (!wasVisited(x + 1, y)) {
            markVisited(x + 1, y);
            numberOfDeliveredPresents += 1;
          }

          x += 1;
        }
        break;
    }
  });

  return numberOfDeliveredPresents;
}

console.log(partOne());

function partTwo() {
  visitedPositions = new Map();

  let santaX = 0;
  let santaY = 0;
  let roboSantaX = 0;
  let roboSantaY = 0;
  let numberOfDeliveredPresents = 1;

  markVisited(santaX, santaY);

  input.split('').forEach((direction, index) => {
    const isSantaMoving = index % 2 === 0;
    const x = isSantaMoving ? santaX : roboSantaX;
    const y = isSantaMoving ? santaY : roboSantaY;

    switch (direction) {
      case NORTH:
        {
          if (!wasVisited(x, y + 1)) {
            markVisited(x, y + 1);
            numberOfDeliveredPresents += 1;
          }

          isSantaMoving ? (santaY += 1) : (roboSantaY += 1);
        }
        break;
      case SOUTH:
        {
          if (!wasVisited(x, y - 1)) {
            markVisited(x, y - 1);
            numberOfDeliveredPresents += 1;
          }

          isSantaMoving ? (santaY -= 1) : (roboSantaY -= 1);
        }
        break;
      case WEST:
        {
          if (!wasVisited(x - 1, y)) {
            markVisited(x - 1, y);
            numberOfDeliveredPresents += 1;
          }

          isSantaMoving ? (santaX -= 1) : (roboSantaX -= 1);
        }
        break;
      case EAST:
        {
          if (!wasVisited(x + 1, y)) {
            markVisited(x + 1, y);
            numberOfDeliveredPresents += 1;
          }

          isSantaMoving ? (santaX += 1) : (roboSantaX += 1);
        }
        break;
    }
  });

  return numberOfDeliveredPresents;
}

console.log(partTwo());
