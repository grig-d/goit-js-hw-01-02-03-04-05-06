// https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=678923456

// Задача 3-1
// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };
// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   message = `${message}${key} : ${user[key]}\n`;
// }
// console.log(message);

// Задача 3-2
// const countProps = function(obj) {
//     'use strict';
//   // Write code under this line
//  return Object.keys(obj).length;
// };

// Задача 3-3
// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//   let maximum = 0;
//   let bestEmployee = '';
//   for (const key of Object.keys(employees)) {
//     if (employees[key] > maximum) {
//       maximum = employees[key];
//       bestEmployee = key;
//     }
//   }
//   return bestEmployee;
// };

// Задача 3-4
// const countTotalSalary = function (employees) {
//   'use strict';
//   // Write code under this line
//   let total = 0;
//   for (const employee of Object.values(employees)) {
//       total += employee;
//   }
//   return total;
// };

// Задача 3-5
// function getAllPropValues(array, prop) {
//   'use strict';
//   // Write code under this line
//   const allPropValues = [];
//   for (const obj of array) {
//     console.log(obj);
//     if (prop in obj) {
//       console.log(obj[prop]);
//       allPropValues.push(obj[prop]);
//     }
//   }
//   return allPropValues;
// }
// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(getAllPropValues(products, 'name'));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity'));
// // [4, 2, 1, 1, 3, 7, 2]
// console.log(getAllPropValues(products, 'category'));
// //  []

// Задача 3-6
// function calculateTotalPrice(array, prop) {
//   'use strict';
//   // Write code under this line
//   let totalPrice = 0;
//   for (const obj of array) {
//     if (obj.name === prop) {
//       totalPrice += obj.price * obj.quantity;
//     }
//   }
//   return totalPrice;
// }
// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(calculateTotalPrice(products, 'Радар'));
// // 9080
// console.log(calculateTotalPrice(products, 'Сканер'));
// // 10200
// console.log(calculateTotalPrice(products, 'Захват'));
// // 2400
// console.log(calculateTotalPrice(products, 'Дроид'));
// // 2800