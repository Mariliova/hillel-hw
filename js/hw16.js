// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Ступінь передається як другий аргумент у функцію

function pow(num, degree) {
  let result = num;
  for (let i = 1; i < degree; i += 1) {
    result *= num;
  }
  return result;
}

const number = pow(2, 4);
console.log(number);

