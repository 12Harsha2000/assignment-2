let input = "Kulaprathazhe";
let charObj = {};
for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if (charObj[char]) {
    charObj[char] += 1;
  } else {
    charObj[char] = 1;
  }
}
console.log(charObj);
