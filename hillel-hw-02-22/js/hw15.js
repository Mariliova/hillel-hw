// -Дан масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const randomArr = ["apple", 1, "2", 4, "banana", 4];
function average(a) {
  let averageNum = 0;
  let count = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (
      typeof a[i] === "number" &&
      a[i] !== Math.LN2 &&
      a[i] !== Infinity &&
      a[i] !== NaN
    ) {
      averageNum += a[i];
      count += 1;
    }
    }
    let sum = averageNum / count;
    return sum;
}
const aver = average(randomArr);
console.log(aver);

// -Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
  let result;
  if (
    x !== Math.LN2 &&
    x !== Infinity &&
    x !== NaN &&
    y !== Math.LN2 &&
    y !== Infinity &&
    y !== NaN
  ) {
    switch (znak) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = x / y;
        break;
      case "%":
        result = x % y;
        break;
      case "^":
        result = Math.pow(x, y);
        break;
      default:
        return;
    }
  }

  return result;
}

const math = doMath(5, '+', 2);
console.log(math);

// -Написати функцію заповнення даними користувача двомірного масиву.Довжину основного масиву і внутрішніх масивів задає користувач.Значення всіх елементів всіх масивів задає користувач.

function userArr() {
    const userArr = [];
    const userArrLength = Number(prompt("How long should be the array?", "3"));
    for (let i = 0; i < userArrLength; i += 1) {
      const element = prompt(
        "Do you want the element to be an item or an array?",
        "item"
      );
      switch (element) {
        case "item":
          userArr.push(prompt("What do you want for the item?", "apple"));
          break;
        case "array":
          const userArrInside = [];
          const userArrLengthInside = Number(
            prompt("How long should be the array?", "2")
          );
          for (let i = 0; i < userArrLengthInside; i += 1) {
            userArrInside.push(
              prompt("What do you want for the item?", "banana")
            );
          }
          userArr.push(userArrInside);
          break;
        default:
          alert("There is no such option.");
      }
    }
    return userArr;
}

const arr = userArr();
console.log(arr);

// -Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач

function removeElements(str, elements) {
  let array = str.split("");

  for (let i = 0; i < elements.length; i += 1){
    array = array.filter(function (element) {
    if (element !== elements[i]) {
      return element;
    }
  });
  }
  const newStr = array.join("");
  return newStr;
}

const refactored = removeElements("hello world", ["l", "d"]);
console.log(refactored); //"heo wor"
