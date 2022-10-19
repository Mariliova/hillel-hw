const length = prompt("How many element do you need?", "5");

const arr = [];
for (let i = 1; i <= length; i += 1) {
    const number = prompt("Enter the number?", "5");
    arr.push(Number(number));
}
console.log(arr);
arr.sort((a, b) => a - b);
console.log(arr);
arr.splice(1,3);
console.log(arr);