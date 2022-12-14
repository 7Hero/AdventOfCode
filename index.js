const day1 = require('./Day 1');
const day3 = require('./Day 3');
const day4 = require('./Day 4');
const day5 = require('./Day 5');

const args = process.argv.slice(2);

function checkArgs() {
  if(args.length === 0) {
    console.log('Please provide a day number. Example: `node index.js -day 3`');
    return;
  }
}

function handleDay(day) {
  switch (day) {
    case '1':
      console.log(`Part One solution: ${day1.partOne}`);
      console.log(`Part Two solution: ${day1.partTwo}`);
      break;
    case '3':
      console.log(`Part One solution: ${day3.partOne}`);
      console.log(`Part Two solution: ${day3.partTwo}`);
      break;
    case '4':
      console.log(`Part One solution: ${day4.partOne}`);
      console.log(`Part Two solution: ${day4.partTwo}`);
      break;
    case '5':
      console.log(`Part One solution: ${day5.partOne}`);
      console.log(`Part Two solution: ${day5.partTwo}`);
      break;
    default:
      console.log('Please provide a valid day number.');
  }
}

checkArgs();

args.forEach(arg => {
  if (arg.startsWith('-day')) {
    const day = args[args.indexOf('-day') + 1]
    handleDay(day);
  }
});