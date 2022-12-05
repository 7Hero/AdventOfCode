const partOne = require('./partOne');
const partTwo = require('./partTwo');

const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf8');

module.exports = {
  partOne: partOne.solve(input),
  partTwo: partTwo.solve(input)
}