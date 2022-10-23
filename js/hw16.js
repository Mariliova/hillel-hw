// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Ступінь передається як другий аргумент у функцію

function pow(num, degree) {
  if (num === 0) return 0;
  if (degree === 0) return 1;
  if (degree === 1) return num;
  if (degree > 1 && num > 0) {
    return num * pow(num, degree - 1);
  }
}

const number = pow(2, 4);
console.log(number);
