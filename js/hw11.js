// Знайти суму та кількість позитивних елементів.
const arr1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum1 = 0;
for (let i = 0; i = arr1.length; i += 1) {
    const anElement = arr1.shift();
    if (anElement > 0) {
        sum1 += Number(anElement);
    }
}
console.log(sum1);

// Знайти мінімальний елемент масиву та його порядковий номер.

const arr2 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const minElement = arr2[0];
for (let i = 0; i = arr2.length; i += 1) {
    if (arr[i] < minElement) {
        minElement = arr[i]
    }
}
console.log(minElement);

const arr2_1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(arr2_1.indexOf(minElement));

// Знайти максимальний елемент масиву та його порядковий номер.

const arr3 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const maxElement = [arr3[0]];
for (let i = 0; i = arr3.length; i += 1) {
    const anElement = arr3.shift();
    if (anElement > maxElement) {
        maxElement.shift();
        maxElement.push(anElement);
    }
}
console.log(maxElement);

const arr3_1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(arr3_1.indexOf(Number(maxElement.join())));


// Визначити кількість негативних елементів.

const arr4 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum2 = 0;
for (let i = 0; i = arr4.length; i += 1) {
    const anElement = arr4.shift();
    if (anElement < 0) {
        sum2 += 1;
    }
}
console.log(sum2);

// Знайти кількість непарних позитивних елементів.

const arr5 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum3 = 0;
for (let i = 0; i = arr5.length; i += 1) {
    const anElement = arr5.shift();
    if (anElement > 0 && anElement % 2 !== 0) {
        sum3 += 1;
    }
}
console.log(sum3);

// Знайти кількість парних позитивних елементів.

const arr6 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum4 = 0;
for (let i = 0; i = arr6.length; i += 1) {
    const anElement = arr6.shift();
    if (anElement > 0 && anElement % 2 == 0) {
        sum4 += 1;
    }
}
console.log(sum4);

// Знайти суму парних позитивних елементів.

const arr7 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum5 = 0;
for (let i = 0; i = arr7.length; i += 1) {
    const anElement = arr7.shift();
    if (anElement > 0 && anElement % 2 == 0) {
        sum5 += anElement;
    }
}
console.log(sum5);

// Знайти суму непарних позитивних елементів.

const arr8 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum6 = 0;
for (let i = 0; i = arr8.length; i += 1) {
    const anElement = arr8.shift();
    if (anElement > 0 && anElement % 2 !== 0) {
        sum6 += anElement;
    }
}
console.log(sum6);

// Знайти добуток позитивних елементів.

const arr9 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let mult = 1;
for (let i = 0; i = arr9.length; i += 1) {
    const anElement = arr9.shift();
    if (anElement > 0) {
        mult *= anElement;
    }
}
console.log(mult);

// Знайти найбільший серед елементів масиву, ост альні обнулити.

const arr10 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const maxElement1 = [arr10[0]];
for (let i = 0; i = arr10.length; i += 1) {
    const anElement = arr10.shift();
    if (anElement > maxElement1) {
        maxElement1.shift();
        maxElement1.push(anElement);
    }
}
console.log(maxElement1);

const arr10_1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
for (let i = 0; i < arr10_1.length; i += 1) {
    if (Number(arr10_1[i]) !== Number(maxElement1.join())) {
        arr10_1[i] = 0;
    }
}
console.log(arr10_1);