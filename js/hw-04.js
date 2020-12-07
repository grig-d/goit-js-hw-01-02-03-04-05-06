// https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=789234557

// // Задача 4-1
// // Write code under this line
// const addIndex = (element, index) => element = element + index;
// // Write code under this line
// const subIndex = (element, index) => element = element - index;
// function mapArray(array, cb) {
//   'use strict';
// // Write code under this line
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//      numbers[i] = cb(element, index);
//   }
//   return numbers;
// }
// const arr  = [1,2,3,4,5];
// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]
// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]

// // Задача 4-2
// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = element => element % 2 === 0;
// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     if (cb(element, index, array)) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }
// const arr = [1, 2, 3, 4, 5, 1, 2, 5];
// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]
// console.log(filterArray(arr, isEven));
// // [2, 4, 2]

// Задача 4-3
