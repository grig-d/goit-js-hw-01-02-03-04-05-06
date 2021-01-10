// https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=uvwxyz0104

// // 2
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }
// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }
// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// // Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы
// console.log(makeMessage('Роял гранд', makePizza)); // Пицца Роял гранд готовится, ожидайте...
// console.log(makeMessage('Ультрасыр', deliverPizza)); // Доставляем пиццу Ультрасыр.

// // 3
// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }
// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки
// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}.`);
// });
// // Пицца Роял гранд готовится, ожидайте...
// // Доставляем пиццу Роял гранд.
// // Пицца Ультрасыр готовится, ожидайте...
// // Едим пиццу Ультрасыр.

// // 4
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//       return onError(pizzaName);
//   },
// };
// // Пиши код выше этой строки
// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }
// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}.`;
// }
// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));

// // 5
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }
//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };
// console.log(pizzaPalace.order('Аль Копчино')); // Заказ принят, готовим пиццу «Аль Копчино».
// console.log(pizzaPalace.order('Четыре нарезона')); // Заказ принят, готовим пиццу «Четыре нарезона».
// console.log(pizzaPalace.order('Биг майк')); // В ассортименте нет пиццы с названием «Биг майк».
// console.log(pizzaPalace.order('Венская')); // В ассортименте нет пиццы с названием «Венская».

// // 6
// const customer = {
//     username: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['Burger', 'Pizza', 'Salad'],
//     // Пиши код ниже этой строки
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Пиши код выше этой строки
//   };

//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, 'Steak');
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// // 7
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];
// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }
// const messages = orders.map((order, index) => composeMessage.call(order, index + 1));
// console.log(messages);

// // 9
// const pizzaPalace = {
//   company: 'Pizza Palace',
// };
// const burgerShack = {
//   company: 'Burger Shack',
// };
// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки
// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

// // 10
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };
// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }
// console.log(
//   logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service)),
// );
// // Почта kiwi@mail.uk добавлена в рассылку.
// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// console.log(logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service)));
// // Почта poly@hotmail.de удалена из рассылки.
// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// DONE