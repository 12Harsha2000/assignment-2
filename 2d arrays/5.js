const inputArray = ["assignment", "problem", "media", "upload"];
const resultArray = [];

for (let i = 0; i < inputArray.length; i++) {
  const firstChar = inputArray[i][0];
  const lastChar = inputArray[i][inputArray[i].length - 1];

  if (firstChar === 'a' || lastChar === 'a') {
    resultArray.push(inputArray[i]);
  }
}
console.log(resultArray);