const solve = (input) => {
  const lines = input.split('\r\n').map( line => line.split(',').map( line => line.split('-').map( line => parseInt(line))));
  
  let overlapCount = 0;
  
  for( let group of lines) {
      const firstStart = group[0][0],
      firstEnd = group[0][1],
      secondStart = group[1][0],
      secondEnd = group[1][1];
      
      if( (firstEnd >= secondStart && firstEnd <= secondEnd) || (secondEnd <= firstEnd && secondEnd >= firstStart)) {
        overlapCount++;
      }
  }
  
  return overlapCount;
}

module.exports = {
  solve
}
