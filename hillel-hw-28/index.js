const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
const container = document.querySelector(".container");
const base = [];

function generateList(array) {
  const ul = document.createElement("ul");

  for (let i = 0; i <= array.length; i += 1) {
    if (i === array.length) {
      base.length = 0;
      return ul;
    }

    if (!Array.isArray(array[i])) {
      if (base.length === 0) {
        ul.insertAdjacentHTML("beforeend", `<li>${array[i]}</li>`);
      } else {
        ul.insertAdjacentHTML(
          "beforeend",
          `<li>${base.join(".")}.${array[i]}</li>`
        );
      }

      if (Array.isArray(array[i + 1])) {
        base.push(array[i]);
      }
    }

    if (Array.isArray(array[i])) {
      ul.insertAdjacentHTML("beforeend", generateList(array[i]).outerHTML);
    }
  }
}

container.appendChild(generateList(listOfLists));
