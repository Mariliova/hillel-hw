const ordersBtn = document.querySelector("#orders-btn");
const ordersUl = document.querySelector("#orders-ul");
const orderDetailsUl = document.querySelector("#order-details");
const ordersList = [];
let currentOrderInfoId;

ordersBtn.addEventListener("click", () => {
  ordersUl.innerText = "";
  ordersList.length = 0;
  categoriesUl.innerText = "";
  productsUl.innerText = "";
  dscpt.innerText = "";
  message.innerText = "";
  for (let i = 0; i < localStorage.length; i += 1) {
    const orderId = localStorage.key(i);
    ordersList.push(JSON.parse(localStorage.getItem(orderId)));
  }
  ordersList.forEach((item) => {
    const { id, date, price } = item;
    ordersUl.insertAdjacentHTML(
      "beforeend",
      `<li>
      <p data-order-id=${id}>${date} - ${price}</p>
      <button id="delete-item" type="button" data-btn-id=${id}>Delete</button>
      </li>`
    );
  });
});

ordersUl.addEventListener("click", (event) => {
  if (event.target.nodeName === "P") {
    for (const element of ordersList) {
      const { date, description, name, price, id } = element;
      if (id === Number(event.target.dataset.orderId)) {
        dscpt.innerText = "";
        message.innerText = "";
        orderDetailsUl.innerText = "";
        currentOrderInfoId = id;
        orderDetailsUl.insertAdjacentHTML(
          "beforeend",
          `<li data-order-details-id=${id}>
            <p>${name}</p>
            <p>${price}</p>
            <p>${date}</p>
          </li>`
        );
        dscpt.innerText = description;
        message.innerText = "The product has been added to the basket";
        order = {
          ...element,
          date: new Date(),
          totat: element.price,
          id: Date.now(),
        };
      }
    }
  }
  if (event.target.nodeName === "BUTTON") {
    for (const element of ordersList) {
      const { id } = element;
      if (id === Number(currentOrderInfoId)) {
        dscpt.innerText = "";
        message.innerText = "";
        orderDetailsUl.innerText = "";
      }
      if (id === Number(event.target.dataset.btnId)) {
        localStorage.removeItem(id);
        event.target.parentElement.remove();
      }
    }
  }
});
