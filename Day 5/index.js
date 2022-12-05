const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf8');

const getStacks = (lines) => {
  const stacks = [];

  for(let line in lines) {

    if(lines[line].charAt(1) === "1"){
      return stacks
    }

    for( let i = 1, column = 0; i < lines[line].length; i+=4, column++) {
      if(!stacks[column]) stacks[column] = [];
      
      if(lines[line].charAt(i) !== " ") {
        stacks[column].push(lines[line].charAt(i))
      }
    }
  }
}

const getInstructions = (lines) => {
  const instructions = [];

  for(let line of lines) {
    if(line.charAt(0) !== 'm') {
      continue;
    }
    instructions.push( line.match(/\d+/gi));
  }
  return instructions;
}

const move = (stacks, instruction, crateMoverVersion = 9000) => {
  const [count, from, to] = instruction;

  const removed = stacks[from-1].splice(0, count);
  switch (crateMoverVersion) {
    case 9000:
      stacks[to-1].unshift(...(removed.reverse()));
      break;
    case 9001:
      stacks[to-1].unshift(...removed);
      break;
  } 
}

const solve = ( input, crateMoverVersion ) => {
  const lines = input.split('\r\n')

  const stacks = getStacks(lines);
  const instructions = getInstructions(lines);
  
  for(let instruction of instructions) {
    move(stacks, instruction, crateMoverVersion);
  }

  return stacks.map( column => column[0]).join('');
}

module.exports = {
  partOne: solve(input, 9000),
  partTwo: solve(input, 9001)
}