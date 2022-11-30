const categories = [
  {
    id: 1,
    category: "Toys",
  },
  {
    id: 2,
    category: "Sports",
  },
  {
    id: 3,
    category: "Grocery",
  },
  {
    id: 4,
    category: "Garden",
  },
];

const products = [
  {
    id: 1,
    category_id: 3,
    name: "Eggplant - Asian",
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 300,
  },
  {
    id: 2,
    category_id: 4,
    name: "Jagermeister",
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 300,
  },
  {
    id: 3,
    category_id: 3,
    name: "Wine - Lou Black Shiraz",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    price: 300,
  },
  {
    id: 4,
    category_id: 1,
    name: "Toy car - Hot Wheels",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 300,
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    price: 300,
  },
  {
    id: 6,
    category_id: 2,
    name: "Tracksuit - Adidas",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    price: 300,
  },
  {
    id: 7,
    category_id: 3,
    name: "Appetizer - Shrimp Puff",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 300,
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
    price: 300,
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 300,
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    price: 300,
  },
  {
    id: 11,
    category_id: 3,
    name: "Beer - Guiness",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 300,
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 300,
  },
  {
    id: 13,
    category_id: 2,
    name: "snikers - Nike",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 300,
  },
  {
    id: 14,
    category_id: 4,
    name: "Wine - Puligny Montrachet A.",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 300,
  },
  {
    id: 15,
    category_id: 4,
    name: "Tomatoes Tear Drop",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    price: 300,
  },
];

const categoriesUl = document.querySelector("#categories");
const productsUl = document.querySelector("#products");
const message = document.querySelector("#message");
const dscpt = document.querySelector("#dscpt");
const buyButton = document.querySelector("#buy-button");
const categoriesButton = document.querySelector("#categories-btn");
let order = {};

buyButton.disabled = true;

categoriesButton.addEventListener("click", () => {
  categoriesUl.innerText = "";
  ordersUl.innerText = "";
  orderDetailsUl.innerText = "";
  dscpt.innerText = "";
  message.innerText = "";
  for (const category of categories) {
    categoriesUl.insertAdjacentHTML(
      "beforeend",
      `<li data-category-id=${category.id}>${category.category}</li>`
    );
  }
});

categoriesUl.addEventListener("click", (event) => {
  if (event.target.nodeName === "LI") {
    productsUl.innerHTML = "";
    for (const product of products) {
      if (product.category_id === Number(event.target.dataset.categoryId)) {
        productsUl.insertAdjacentHTML(
          "beforeend",
          `<li data-product-id=${product.id}>${product.name}</li>`
        );
      }
    }
  }
});

productsUl.addEventListener("click", (event) => {
  if (event.target.nodeName === "LI") {
    dscpt.innerText = "";
    message.innerText = "";
    for (const product of products) {
      if (product.id === Number(event.target.dataset.productId)) {
        dscpt.innerText = product.description;
        message.innerText = "The product has been added to the basket";
        buyButton.disabled = false;
        order = {
          ...product,
          date: new Date(),
          totat: product.price,
          id: Date.now(),
        };
      }
    }
  }
});
