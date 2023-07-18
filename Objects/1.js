const arr = ['Harsha', 23, 'F'];
const obj = {};

obj.name = arr[0];
obj.age = arr[1];
obj.gender = arr[2];

for (let key in obj) {
  console.log(key + " - " + obj[key]);
}