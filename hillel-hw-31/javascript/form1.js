// Modal

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

// Form validation

const form = document.forms.buy;
const error = document.querySelector(".error");

const formBtn = document.querySelector(".form__btn");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  error.innerText = "";
  const errors = [];
  const [userName, city, post, , , numberOfItems] = form.elements;
  const inputsValue = [userName, city, post, numberOfItems];
  const regularExp = /^[A-ZА-ЯІЇ\s-]+$/i;
  if (!regularExp.test(userName.value.trim())) {
    errors.push("Fill the input for name correctly");
    error.innerText = errors.join(", ");
    return;
  }
  inputsValue.forEach((el) => {
    if (el.value === "") {
      errors.push("Fill out the form completely!");
      return;
    }
  });
  localStorage.setItem(order.id, `${JSON.stringify(order)}`);
  form.submit();
});
