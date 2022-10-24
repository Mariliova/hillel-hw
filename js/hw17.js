// Написати функцію, яка приймає 1 параметр.з тим, що передали перший раз і т.д.
//  Все це із замиканнями, наприклад: sum(3) = 3, sum(5) = 8, sum(20) = 28

function createIncrementor() {
  let sum = 0;
  return function (num) {
    return (sum += num);
    return sum;
  };
}

const added = createIncrementor();
console.log(added(3)); // 3
console.log(added(5)); // 8
console.log(added(20)); // 28
