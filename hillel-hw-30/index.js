const info = document.querySelector("#info");
const container = document.querySelector(".container");
const form = document.forms.myForm;
const table = document.querySelector("#table");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const elements = form.elements;
  const [name, surname, birthday, male, female, city, eng, uk, address] =
    elements;
  console.log(elements);
  const infoArgs = [name, surname, birthday, city, address];
  const checkboxesArgs = [male, female, eng, uk];
  for (const arg of infoArgs) {
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.innerText = arg.value;
  }
  for (const arg of checkboxesArgs) {
    if (arg.checked === true) {
      const row = table.insertRow();
      const cell = row.insertCell();
      cell.innerText = arg.nextElementSibling.innerText;
    }
  }
});
