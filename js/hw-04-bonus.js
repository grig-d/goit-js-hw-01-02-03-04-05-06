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

