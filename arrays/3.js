function removeOddLengthStrings(strings) {
    const filteredStrings = strings.filter(str => str.length % 2 === 0);
    return filteredStrings;
  }
  
  const strings = ['edstem', 'react', 'html', 'foodie', 'coder'];
  const filteredStrings = removeOddLengthStrings(strings);
  
  console.log(filteredStrings);
  