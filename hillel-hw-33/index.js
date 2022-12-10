const products = [
  {
    id: 1,
    name: "Apples",
    price: 25,
    isActive: true,
  },
  {
    id: 2,
    name: "Bananas",
    price: 80,
    isActive: true,
  },
  {
    id: 3,
    name: "Eggs",
    price: 200,
    isActive: false,
  },
  {
    id: 4,
    name: "Tomatoes",
    price: 50,
    isActive: true,
  },
  {
    id: 5,
    name: "Cucumbers",
    price: 95,
    isActive: false,
  },
  {
    id: 6,
    name: "Pears",
    price: 35,
    isActive: false,
  },
];

const refs = {
  products: document.querySelector(".products"),
};

// console.log(refs.products);

const productsListToAppend = products.map(({ id, name, price, isActive }) => {
  const productLi = document.createElement("li");
  productLi.classList.add("product");
  const productTitle = document.createElement("div");
  productTitle.classList.add("product__title");
  productTitle.innerText = name;
  const productImg = document.createElement("div");
  productImg.classList.add("product__image");
  const productPrice = document.createElement("div");
  productPrice.classList.add("product__price");
  productPrice.innerText = price;
  const productBtn = document.createElement("button");
  productBtn.classList.add("product__btn");
  productBtn.innerText = "Add to cart";
  if (!isActive) {
    productBtn.setAttribute("disabled", "true");
  }
  productLi.append(productTitle, productImg, productPrice, productBtn);

  return productLi;
});

refs.products.append(...productsListToAppend);

refs.products.addEventListener("click", onProductClick);

function onProductClick(e) {
  if (
    // зробити так, щоб на всю карточку можна було клікнуть
    e.target.classList.contains("product") &&
    !e.target.classList.contains("product__btn")
  ) {
    history.pushState(
      null,
      "",
      "http://127.0.0.1:5500/hillel-hw-33/products.html"
    );
  }
}

class MyCustomElement extends HTMLElement {
  constractor(selector) {
    //https://www.youtube.com/watch?v=gfvFEBXMVSU
    super();
    this.element = document.createElement(selector);
    return this.element;
  }
  addClass(className) {
    this.element.classList.add(className);
    return this;
  }
  removeClass(className) {
    this.element.classList.remove(className);
    return this;
  }
  setAttribute(attrName, attrValue) {
    this.element.setAttribute(attrName, attrValue);
    return this;
  }
  removeAttribute(attrName) {
    this.element.removeAttribute(attrName);
    return this;
  }
  // setStyle(prop, value) {
  //   this.element.style.[prop] = value;
  //   return this;
  // }
}

const customDiv = new MyCustomElement("div").addClass("hello");
console.dir(customDiv);

// refs.products.insertAdjacentHTML(
//   "beforeend",
//   `<div class="product">
//       <div class="product__title">${name}</div>
//       <div class="product__image"></div>
//       <div class="product__price">${price} $</div>
//       <button class="product__btn">Add to cart</button>
// </div>`
// );
