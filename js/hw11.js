const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів.

let sum1 = 0;
let numberOfNumbers = 0;
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
        sum1 += arr[i];
        numberOfNumbers += 1;
    }
}
console.log(sum1);
console.log(numberOfNumbers);

// Знайти мінімальний елемент масиву та його порядковий номер.

let minElement = arr[0];
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < minElement) {
        minElement = arr[i];
    }
}
console.log(minElement);
console.log(arr.indexOf(Number(minElement)));

// Знайти максимальний елемент масиву та його порядковий номер.

let maxElement = arr[0];
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
    }
}
console.log(maxElement);
console.log(arr.indexOf(Number(maxElement)));


// Визначити кількість негативних елементів.

let numberOfNumbers2 = 0;
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0) {
        numberOfNumbers2 += 1;
    }
}
console.log(numberOfNumbers2);

// Знайти кількість непарних позитивних елементів.

let numberOfNumbers3 = 0;
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        numberOfNumbers3 += 1;
    }
}
console.log(numberOfNumbers3);

// Знайти кількість парних позитивних елементів.

let numberOfNumbers4 = 0;
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
        numberOfNumbers4 += 1;
    }
}
console.log(numberOfNumbers4);

// Знайти суму парних позитивних елементів.

let sum2 = 0;
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
        sum2 += arr[i];
    }
}
console.log(sum2);

// Знайти суму непарних позитивних елементів.

let sum3 = 0;
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        sum3 += arr[i];
    }
}
console.log(sum3);

// Знайти добуток позитивних елементів.

let mult = 1;
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
        mult *= arr[i];
    }
}
console.log(mult);

// Знайти найбільший серед елементів масиву, ост альні обнулити.

let maxElement1 = arr[0];
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maxElement1) {
       maxElement1 = arr[i];
    }
}
console.log(maxElement1);

for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== maxElement1) {
        arr[i] = 0;
    }
}
console.log(arr);