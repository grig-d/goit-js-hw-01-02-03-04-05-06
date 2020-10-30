// Модуль: 1

// let balance = 10000
// const payment = 2000
// console.log(`Сумма заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету:`)
// if (balance >= payment) {
// 	balance = balance - payment
// 	console.log(`Всё хорошо! Снимаем деньги, спасибо за покупку!`)
// 	console.log(`На счету осталось ${balance} кредитов`)
// } else {
// 	console.log('На счету недостаточно средств для проведения операции!')
// }

// const totalExpenses = 150;
// const payment = 500;
// let discount = 0;
// if (totalExpenses >= 100 && totalExpenses < 1000) {
//   discount = 0.02;
//   console.log('Бронзовый партнер, скидка 2%');
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//   discount = 0.05;
//   console.log('Серебряный партнер, скидка 5%');
// } else if (totalExpenses >= 5000) {
//   discount = 0.1;
//   console.log('Золотой партнер, скидка 10%');
// } else {
//   console.log('У вас ещё нет партнерской скидки');
// }
// const finalAmount = payment - payment * discount;
// console.log(`Оформляем заказ на сумму ${finalAmount} со скидкой ${discount * 100}%`);

// const age = 12;
// const category = (age >= 18) ? 'adult' : 'child';
// console.log(category);

// const stars = 3;
// let result;
// switch (stars) {
//   case 1:
//     result = 1;
//     break;
//   case 2:
//     result = 2;
//     break;
//   default:
//     result = 0;
// }
// console.log(result);

// Random
// console.log(Math.floor(Math.random() * 10));

// cycle for
// for (let count = 0; count < 5; count += 1) {
//   console.log(Math.floor(Math.random() * 10));
// }

// cycle do while
// do {
//   userInput = Number(prompt('Type 5'));
//   if (userInput === 0) {
//     break;
//   }
// } while (userInput !== 5);

// ------------------------------------------------------------------------------------------------

// Задача 1-1
// const name = '«Генератор защитного поля»'; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

// Задача 1-2
// const message = invoice > stock ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';

// Задача 1-3
// if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else {
//   message = ACCESS_DENIED;
// }

// Задача 1-4
// let totalPrice = orderPieces * pricePerDroid; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;
// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (orderPieces >= 0 && balanceCredit >= 0) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else if (balanceCredit < 0) {
//   message = ACCESS_DENIED;
// }

// Задача 1-5
// const countryName = "КитаЙ";
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//   // Write code under this line
//     case CHINA:
//       price = 100;
//       break;
//     case AUSTRALIA:
//       price = 170;
//       break;
//     case INDIA:
//       price = 80;
//       break;
//     case JAMAICA:
//       price = 120;
//       break;
//     default:
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) { // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }
// console.log(message);

// ------------------------------------------------------------------------------------------------
// const a = b || c ? b + c : b - c;

