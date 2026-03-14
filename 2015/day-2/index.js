import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8');

function partOne() {
  let squareFeetOfWrappingPaper = 0;

  input.split('\n').forEach((dimensions) => {
    const [length, width, height] = dimensions.split('x');

    const firstSide = length * width;
    const secondSide = length * height;
    const thirdSide = width * height;

    const smallestSide = Math.min(firstSide, secondSide, thirdSide);

    const wrappingPaperSize = 2 * firstSide + 2 * secondSide + 2 * thirdSide;
    const additionalWrappingPaper = smallestSide;

    squareFeetOfWrappingPaper += wrappingPaperSize + additionalWrappingPaper;
  });

  return squareFeetOfWrappingPaper;
}

console.log(partOne());

function partTwo() {
  let totalLengthOfRibbon = 0;

  input.split('\n').forEach((dimensions) => {
    const sizes = dimensions.split('x');
    const [length, width, height] = sizes;

    const sortedSizes = sizes.sort((a, b) => a - b);
    const minSide = sortedSizes[0];
    const middleSide = sortedSizes[1];

    const lengthOfRibbonToWrap = minSide * 2 + middleSide * 2;
    const lengthOfRibbonForTheBow = length * width * height;

    totalLengthOfRibbon += lengthOfRibbonToWrap + lengthOfRibbonForTheBow;
  });

  return totalLengthOfRibbon;
}

console.log(partTwo());
