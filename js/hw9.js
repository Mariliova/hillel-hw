// - Вивести на сторінку в один рядок через кому числа від 10 до 20
const arrNumbers10_20 = [];

for (let i = 10; i <= 20; i += 1){
    arrNumbers10_20.push(i);
}
console.log(arrNumbers10_20.join(","));

// - Вивести квадрати чисел від 10 до 20

const arrNumbers10_20_2 = [];

for (let i = 10; i <= 20; i += 1){
    const j = i * i;
    arrNumbers10_20_2.push(j);
}
console.log(arrNumbers10_20_2.join(","));

// - Вивести таблицю множення на 7

for (let i = 1; i <= 10; i += 1) {
    console.log(`${i} * 7 = ${i * 7}`);
}

// -Знайти суму всіх цілих чисел від 1 до 15

let sum = 0;
for (let i = 1; i <= 15; i += 1) {
    sum += i;
}
console.log(sum);

// -Знайти добуток усіх цілих чисел від 15 до 35

let mult = 1;
for (let i = 15; i <= 35; i += 1) {
    mult *= i;
}
console.log(mult);

// -Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let sum500 = 0;
const NUMBER_OF_NUMBERS = 500;
for (let i = 1; i <= 500; i += 1) {
    sum500 += i;
}
let avarage = sum500 / NUMBER_OF_NUMBERS ;
console.log(avarage);

// -Вивести суму лише парних чисел в діапазоні від 30 до 80

let sum30_80 = 0;
for (let i = 30; i <= 80; i += 1) {
    if (i % 2 !== 0 ) {
        sum30_80 += i;
    }
}
console.log(sum30_80);

// - Вивести всі числа в діапазоні від 100 до 200 кратні 3

const arr100_200 = [];
for (let i = 100; i <= 200; i += 1) {
    if (i % 3 == 0 ) {
        arr100_200.push(i);
    }
}
console.log(arr100_200.join(","));

// -Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// -Визначити кількість його парних дільників
// -Знайти суму його парних дільників

const naturalNumber = 30;
let arrDeviders = [];
let arrEvenDeviders = [];
let sumEvenDeviders = 0;
for (let i = 1; i <= naturalNumber; i += 1) {
    if (naturalNumber % i == 0) {
        arrDeviders.push(i);
        if (i % 2 == 0) {
            arrEvenDeviders.push(i);
            sumEvenDeviders += i;
        }
    }
}
console.log(arrDeviders.join(","));
console.log(arrEvenDeviders.join(","));
console.log(sumEvenDeviders);

// -Надрукувати повну таблицю множення від 1 до 10

const startTable = 1;
const endTable = 10;

for (let i = startTable; i <= endTable; i += 1) {
    for (let j = startTable; j <= endTable; j += 1) {
    console.log(`${j} * ${i} = ${i * j}`);
}
}


