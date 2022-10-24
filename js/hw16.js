// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Ступінь передається як другий аргумент у функцію

function pow(num, degree) {
  if (num === 0) return 0;
  if (degree === 0) return 1;
  if (degree === 1) return num;
  if (degree > 1) {
    return num * pow(num, degree - 1);
  }
  if (degree < 0) {
    return 1.0 / pow(num, -degree);
  }
}

const number1 = pow(-2, 3);
console.log(number1);

const number2 = pow(2, -3);
console.log(number2);