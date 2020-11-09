// https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=p67892355

// Задача 2-1
// const getItemsString = function (array) {
//   'use strict';
//   // Write code under this line
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     result = result + `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

// Задача 2-2
// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//   message.split(' ').length * pricePerWord;

// Задача 2-3
// function findLongestWord(string = '') {
//   // Write code under this line
//   const arr = string.split(' ');
//   let longestWord = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i].length > longestWord.length) {
//       longestWord = arr[i];
//     }
//   }
//   return longestWord;
// }

// Задача 2-4
// function formatString(string, maxLength = 40) {
//   // Write code under this line
//     if (string.length > maxLength) {
//         return (string.slice(0, maxLength) + '...');
//   }
//   return string;
// }
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// Задача 2-5
// function checkForSpam(str) {
//   'use strict';
//   // Write code under this line
//   if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
//       return true;
//   }
//   return false;
// }
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// Задача 2-6
// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   console.log(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]
// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// Задача 2-7
// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }
// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]
// console.log(filterArray([1, NaN, Infinity]));
// // [1]
// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]
// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]
// console.log(filterArray([{}, () => {}, 2]));
// // [2]

// Задача 2-8
// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }
//   return total;
// }
// console.log(reduceArray([1, 2, 3]));
// // 6
// console.log(reduceArray([-2, 0, 2]));
// // 0
// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// Задача 2-9
// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   const loginValid = login.length >= min && login.length <= max;
//   return loginValid;
// }
// function isLoginUnique(allLogins, login) {
//   'use strict';
//   // Write code under this line
//   const loginUnique = !allLogins.includes(login);
//   return loginUnique;
// }
// function addLogin(allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   // Write code under this line
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {
//       allLogins.push(login);
//       return (message = SUCCESS);
//     }
//     return (message = REFUSAL);
//   }
//   return (message = ERROR);
// }
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
