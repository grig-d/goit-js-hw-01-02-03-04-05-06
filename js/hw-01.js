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
