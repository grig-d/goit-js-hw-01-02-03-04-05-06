import users from './hw-06-users.js';
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

// // Задача 13
// // Имена пользователей
// const getUserNames = users => {
//   return users.map(user => user.name);
// };
// console.log(getUserNames(users));
// // ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

// // Задача 14
// // Почты пользователей
// const getUserEmails = users => {
//   return users.map(user => user.email);
// };
// console.log(getUserEmails(users));
// // ['moorehensley@indexia.com', 'sharlenebush@tubesys.com', 'rossvazquez@xinware.com', 'elmahead@omatom.com', 'careybarr@nurali.com', 'blackburndotson@furnigeer.com', 'shereeanthony@kog.com']

// // Задача 16
// // фильтрация уникальных элементов
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (element, index, array) => array.indexOf(element) === index,
// );
// console.log(allGenres); // ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы', 'мистика', 'приключения']
// console.log(uniqueGenres); // ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы']

// // Задача 17
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

// // Задача 18
// // Пользователи с цветом глаз
// const getUsersWithEyeColor = (users, color) => {return users.filter(user => user.eyeColor === color);};
// console.log(getUsersWithEyeColor(users, 'blue'));
// console.log(getUsersWithEyeColor(users, 'green'));
// console.log(getUsersWithEyeColor(users, 'brown'));

// // Задача 19
// // Пользователи в возрастной категории
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age > minAge && user.age < maxAge);
// };
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

// // Задача 20
// // Пользователи с другом
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };

// // Задача 21
// // Список друзей
// const getFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((element, index, array) => array.indexOf(element) === index);
// };
// console.log(getFriends(users));
// // ['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman']

// // Задача 22
// // Активные пользователи
// const getActiveUsers = users => {
//   return users.filter(user => user.isActive);
// };

// // Задача 25
// // Пользователь с почтой
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// // Задача 26
// // every()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки
// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);
// const eachElementInSecondIsEven = secondArray.every(
//   element => element % 2 === 0,
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   element => element % 2 !== 0,
// );
// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);
// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// // Задача 27
// // Все ли пользователи активны
// const isEveryUserActive = users => {
//   return users.every(user => user.isActive);
// };
// console.log(isEveryUserActive(users));

// // Задача 29
// // Есть ли активные пользователи
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive);
// };
// console.log(isAnyUserActive(users));

// // Задача 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => acc += player.playtime / player.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame); // 1023

// // Задача 32
// // Общий баланс пользователей
// const calculateTotalBalance = users => {
//   return users.reduce((accu, user) => accu += user.balance, 0);
// };
// console.log(calculateTotalBalance(users)); // 20916

// // Задача 33
// // Общее количество друзей
// const getTotalFriendCount = users => {
//   return users.reduce((accu, user) => (accu += user.friends.length), 0);
// };
// console.log(getTotalFriendCount(users)); // 14

// // Задача 36
// // localeCompare()
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт',
// ];
// // Пиши код ниже этой строки
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// // Задача 37
// // Сортировка книг по автору
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки
// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author),
// );
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// // Задача 38
// // Сортировка по балансу
// const sortByAscendingBalance = users => {
//   return users.sort((userA, userB) => userA.balance - userB.balance);
// };

// // Задача 39
// // Сортировка по количеству друзей
// const sortByDescendingFriendCount = users => {
//   return [...users].sort(
//     (userA, userB) => userB.friends.length - userA.friends.length,
//   );
// };

// // Задача 40
// // Сортировка по имени
// const sortByName = users => {
//   return [...users].sort((userA, userB) => (userA.name).localeCompare(userB.name));
// };
// console.log(sortByName(users));

// // Задача 41
// // массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки
// const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((authorA, authorB) => authorA.localeCompare(authorB));
// console.log(names);

// // Задача 42
// // массив имён пользователей отсортированный по возрастанию количества их друзей
// const getNamesSortedByFriendCount = users => {
//     return [...users].sort(
//       (userA, userB) => userA.friends.length - userB.friends.length,
//     ).map(user => user.name)
// };
// console.log(getNamesSortedByFriendCount(users));

// // Задача 43
// // Имена друзей
// // массив уникальных имён друзей (свойство friends) отсортированный по алфавиту
// const getSortedFriends = users => {
//     return [...users]
//       .flatMap(user => user.friends)
//       .filter((friend, index, array) => array.indexOf(friend) === index)
//       .sort((friendA, friendB) => friendA.localeCompare(friendB));
// };
// console.log(getSortedFriends(users));

// // Задача 44
// // общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender
// const getTotalBalanceByGender = (users, gender) => {
//     return [...users].filter(user => (user.gender === gender)).reduce((accu, user) => accu += user.balance, 0);
// };
// console.log(getTotalBalanceByGender(users, 'male')); // 12053
// console.log(getTotalBalanceByGender(users, 'female')); // 8863

// DONE