const fs = require('fs');
const path = require('path');

const partOne = require('./partOne');
const partTwo = require('./partTwo');

const data = fs.readFileSync(path.join(__dirname, 'input'), 'utf-8')
const lines = data.split('\r\n').map( line => line.split(' '));

const solve = (lines, solver) => lines.reduce( (score, line) => (score + solver(line[0], line[1])), 0);

module.exports = {
    partOne: solve(lines, partOne),
    partTwo: solve(lines, partTwo)
}