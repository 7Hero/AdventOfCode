const commonLetter = ( tuple ) => {
  const firstCompartment = tuple[0],
  secondCompartment = tuple[1];

  for( letter of firstCompartment) {
    if( secondCompartment.includes(letter) ) {
      return letter;
    }
  }
}

const solve = ( input ) => {
  const lines = input.split('\r\n').map( line => {
    return [ line.substring(0,line.length/2), line.substring(line.length/2) ];
  });

  let totalPriority = 0;
  
  lines.forEach( tuple => {
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