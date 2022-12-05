const day3 = require('./Day 3');
const day4 = require('./Day 4');
const day5 = require('./Day 5');

const args = process.argv.slice(2);

if(args.length === 0) {
  console.log('Please provide a day number. Example: `node index.js -day 3`');
  return;
}

if (process.argv.includes('-day') && process.argv[process.argv.indexOf('-day') + 1] === '3') {
  console.log(`Part One solution: ${day3.partOne}`);
  console.log(`Part Two solution: ${day3.partTwo}`);
}

if (process.argv.includes('-day') && process.argv[process.argv.indexOf('-day') + 1] === '4') {
  console.log(`Part One solution: ${day4.partOne}`);
  console.log(`Part Two solution: ${day4.partTwo}`);
}

if (process.argv.includes('-day') && process.argv[process.argv.indexOf('-day') + 1] === '5') {
  console.log(`Part One solution: ${day5.partOne}`);
  console.log(`Part Two solution: ${day5.partTwo}`);
}
