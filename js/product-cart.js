// корзина товаров
// корзина это объект cart и методом работы с его свойствами
// создаём интерфейс - это наличие набора методов для работы с данными (API = интерфейс)
// getItem - метод получения из корзины всех её элементов;

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (productName === item.name) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }
    }
  },
};
// cart.remove('cherry');
// cart.clear();
// cart.countTotalPrice();
// cart.increaseQuantity('apricot');
// cart.decreaseQuantity('apricot');

// next code is usualyy in other file named "view.js"
document.querySelector('.js-show-cart').addEventListener('click', () => {
  console.table(cart.getItems());
});
document
  .querySelector('button[data-product="apple"]')
  .addEventListener('click', cart.add.bind(cart, { name: 'apple', price: 25 }));
document
  .querySelector('button[data-product="banana"]')
  .addEventListener(
    'click',
    cart.add.bind(cart, { name: 'banana', price: 25 }),
  );
document
  .querySelector('button[data-product="cherry"]')
  .addEventListener(
    'click',
    cart.add.bind(cart, { name: 'cherry', price: 25 }),
  );
document
  .querySelector('button[data-product="orange"]')
  .addEventListener(
    'click',
    cart.add.bind(cart, { name: 'orange', price: 25 }),
  );
document
  .querySelector('button[data-product="apricot"]')
  .addEventListener(
    'click',
    cart.add.bind(cart, { name: 'apricot', price: 25 }),
  );
