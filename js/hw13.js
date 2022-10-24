const array = [1, 2, 5, 3, 4, 5, 6, 7, 5];

function removeElement(array, item) {
  let newArr = array.filter(function (element) {
    if (element !== item) {
      return element;
    }
  });
  return newArr;
}

const filteredArr = removeElement(array, 5);
console.log(filteredArr);