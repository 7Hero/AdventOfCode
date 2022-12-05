const commonLetter = ( tuple ) => {
  const firstElf = tuple[0],
  secondElf = tuple[1],
  thirdElf = tuple[2]; 

  for( letter of firstElf) {
    if( secondElf.includes(letter) && thirdElf.includes(letter)) {
      return letter;
    }
  }
}

const solve = ( input ) => {
  const lines = input.split('\r\n')
  let totalPriority = 0;

  const newLines = [];
  for( let i = 0; i < lines.length; i+=3 ) {
    newLines.push([lines[i], lines[i+1], lines[i+2]]);
  }
  
  newLines.forEach( tuple => {
    const common = commonLetter(tuple);

    const commonASCII = common.charCodeAt(0);
    if( commonASCII <= 90 ) {
      totalPriority += commonASCII - 38;
    } else {
      totalPriority += commonASCII - 96;
    }
  })

  return totalPriority;
}

module.exports = {
  solve
}