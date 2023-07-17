const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    firstDiagonalSum += matrix[i][i];
    secondDiagonalSum += matrix[i][matrix.length - 1 - i];
  }
  
  const difference = firstDiagonalSum - secondDiagonalSum;
  
  console.log('First Diagonal ->', firstDiagonalSum);
  console.log('Second Diagonal ->', secondDiagonalSum);
  console.log('Difference =>', difference);
  