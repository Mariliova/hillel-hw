# hw33 Створити список товарів

1)Робота з даними і історією

- Потрібно створити масив товарів з id, name, price, isActive

- Вивести список на основі готової верстки на головну сторінку

* По кліку на карточку товару на головній має відбуватися перехід на сторінку товару

https://developer.mozilla.org/ru/docs/Web/API/History/pushState

На сторінці товару потрібно відображати актуальну інформацію - назву товару

https://developer.mozilla.org/ru/docs/Web/API/History/state

2)Робота з DOM

- Кнопка корзини біля товару доступна лише якщо товар isActive

- Елементи для списку створювати через document.createElement і addEventListener

* Підміняти інформацію про товар на актуальну на сторінці товару через: innerText/innerHTML/insertAdjacent

  3)Робота з ООП

Створити javascript-клас MyCustomElement

при створенні він має приймати селектор для елемента (div, span, buttton...)

та мати необхідні методи для роботи, які підходять, наприклад:

addClass, removeClass, setAttribute, removeAttribute, setStyle

Що працює по ланцюжку на подобі цього

new MyCustomElement('div').addClass('hidden').setAttribute('name', nameStr);

Підказка: методи класу повинні повертати this

Додавання картинок, робота з localStorage - необов'язково, за бажанням
