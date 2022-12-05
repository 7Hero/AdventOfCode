const solve = (input) => {
  const lines = input.split('\r\n').map( line => line.split(',').map( line => line.split('-').map( line => parseInt(line))));

  let fullyContainedCount = 0;

  for( let group of lines) {
      const firstStart = group[0][0],
      firstEnd = group[0][1],
      secondStart = group[1][0],
      secondEnd = group[1][1];
      
      if( firstStart <= secondStart && firstEnd >= secondEnd) {
        fullyContainedCount++;
      } else if( firstStart >= secondStart && firstEnd <= secondEnd) {
        fullyContainedCount++;
      }
  }

  return fullyContainedCount;
}

module.exports = {
  solve
}
