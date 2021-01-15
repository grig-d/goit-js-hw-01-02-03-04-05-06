// https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=op6789290

// // Задача 1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i];
//   //   }
//   orderedItems.forEach(item => (totalPrice = totalPrice + item));
//   // Пиши код выше этой строки
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// // Задача 2
// // Фильтрация массива чисел
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// // Задача 3
// // Общие элементы
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   firstArray.forEach(first => {
//     if (secondArray.includes(first)) {
//       commonElements.push(first);
//     }
//   });
//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []
// console.log(
//   getCommonElements(
//     [11, 24, 7, 13, 17, 16, 20, 20, 15, 18, 21, 16, 5, 17, 10, 10, 7, 11, 22],
//     [24, 24, 17, 19, 5, 5, 5, 18, 23, 20, 21, 8, 12, 13, 6, 24, 24, 18, 9],
//   ),
// ); // [24,13,17,20,20,18,21,5,17]

// // Задача 4
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };

// // Задача 6
// // Стрелочные функции как коллбеки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item =>
//     totalPrice += item
//   );
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// // Задача 7
// // Фильтрация массива чисел 2.0
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// // Задача 8
// // Общие элементы 2.0
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Пиши код выше этой строки
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2].
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2].
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3].
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40].
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// // Задача 9
// // Чистые функции
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArr.push(numbers[i] + value);
//     } else {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
//   // Пиши код выше этой строки
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // возвращает новый массив [1, 12, 3, 14, 5].
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // возвращает новый массив [12, 18, 3, 7, 14, 16].
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // возвращает новый массив [17, 124, 168, 31, 142].
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // возвращает новый массив [144, 13, 81, 192, 136, 154]

// // Задача 10
// // map()
// // получи массив длин названий планет
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths); // [5, 4, 6, 6]

// // Задача 11
// // map() и массив объектов
// // получи в переменной titles массив названий книг (свойство title) из всех объектов массива books
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки
// const titles = books.map(book => book.title);
// console.log(titles); // ['Последнее королевство', 'На берегу спокойных вод', 'Сон смешного человека', 'Красна как кровь', 'Враг Божий']

// // Задача 12
// // flatMap()
// // получи в переменной genres массив всех жанров книг (свойство genres) из массива книг books
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
//     const genres = books.flatMap(book => book.genres);
//   console.log(genres); // [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ]

// Задача 13
// Имена пользователей

