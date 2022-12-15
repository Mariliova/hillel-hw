const refs = {
  product: document.querySelector(".product"),
};

products.forEach(({ id, name, price, isActive }) => {
  if (id === Number(history.state)) {
    refs.product.innerHTML = `
          <div class="product__title">${name}</div>
          <div class="product__image"></div>
          <div class="product__price">${price} $</div>
          <button class="product__btn" ${
            !isActive ? "disabled" : ""
          }>Add to cart</button>
      `;
  }
});
