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


// https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=p67892355
