const refs = {
  products: document.querySelector(".products"),
};

class MyCustomElement {
  constructor(selector) {
    this.element = document.createElement(selector);
  }

  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.element.classList.add(className);
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

  innerText(text) {
    this.element.innerText = text;
    return this;
  }
}

const productsListToAppend = products.map(({ id, name, price, isActive }) => {
  const productLi = new MyCustomElement("li")
    .addClass("product")
    .setAttribute("data-product-id", id).element;
  const productTitle = new MyCustomElement("p")
    .addClass("product__title")
    .innerText(name).element;
  const productImg = new MyCustomElement("p").addClass(
    "product__image"
  ).element;
  const productPrice = new MyCustomElement("p")
    .addClass("product__price")
    .innerText(price).element;
  const productBtn = new MyCustomElement("button")
    .addClass("product__btn")
    .innerText("Add to cart").element;

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
    e.target.closest(".product") &&
    !e.target.classList.contains("product__btn")
  ) {
    const currentProductId = e.target.closest(".product").dataset.productId;
    window.history.pushState(currentProductId, null, "./product.html");
    window.location = "./product.html";
  }
}
