// Написати функцію, яка приймає 1 параметр.з тим, що передали перший раз і т.д.
//  Все це із замиканнями, наприклад: sum(3) = 3, sum(5) = 8, sum(20) = 28

function createIncrementor(a) {
    return function (num) {
        return a + num;
    }
}

const add1 = createIncrementor(1);
console.log(add1(3));