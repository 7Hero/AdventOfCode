const fs = require('fs');
const path = require('path');

const lines = fs.readFileSync(path.join(__dirname, 'input'), 'utf-8').split('\r\n');

const solvePartOne = (lines) => {
    let maxCalories = 0;
    let elfInstanceTotalCalories = 0;
    lines.forEach( line => {
        if ( line === "") {
            maxCalories = Math.max(maxCalories, elfInstanceTotalCalories);
            elfInstanceTotalCalories = 0;
        } else {
            elfInstanceTotalCalories += Number(line);
        }
    })

    return maxCalories;
}

const solvePartTwo = (lines) => {
    const elvesCalories = [];
    let totalCalories = 0;
    lines.forEach( line => {
        if ( line === "") {
            elvesCalories.push(totalCalories);
            totalCalories = 0;
        } else {
            totalCalories += Number(line);
        }
    })
    return elvesCalories.sort((a, b) => b - a).slice(0,3).reduce((a, b) => a + b, 0)
}

module.exports = {
    partOne: solvePartOne(lines),
    partTwo: solvePartTwo(lines)
}