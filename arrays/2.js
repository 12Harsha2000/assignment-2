function calculateAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
  
    const average = sum / marks.length;
    return average;
  }
  
  const marks = [95, 86, 66, 94, 58];
  const average = calculateAverage(marks);
  
  console.log(average);  