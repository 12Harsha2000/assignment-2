const scores = [100, 20, 31, 150, 39, 72];
let highestScore = -Infinity;
let lowestScore = Infinity;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > highestScore) {
    highestScore = scores[i];
  }

  if (scores[i] < lowestScore) {
    lowestScore = scores[i];
  }
}

console.log(highestScore);
console.log(lowestScore);