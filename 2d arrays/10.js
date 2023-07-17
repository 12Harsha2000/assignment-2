const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < matrix.length; i++) {
    const middleColumnElement = matrix[i][Math.floor(matrix[i].length / 2)];
    console.log(middleColumnElement);
  }  