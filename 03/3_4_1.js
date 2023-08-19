
console.log("for i");
let arr = new Array(1, 2, 3, 4, 5);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("for of");
for (let i of arr) {
    console.log(i);
}

console.log("for ...");
console.log(...arr)

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);