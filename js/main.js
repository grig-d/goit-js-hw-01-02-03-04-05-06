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

// cycle for of
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';
// let message = 'is not here';
// for (const friend of friends) {
//   if (nameToFind === friend) {
//     message = 'is here';
//     break;
//   }
// }
// console.log(`${nameToFind} ${message}`);

// const board = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(board[0][1]);

// split & join
// const a = 'Hell Patrol';
// const b = a.split(' ');
// const c = b.join('_')
// console.log(a, b, c);

// arrays
// const a = [1, 2, 3];
// const b = a;
// const c = [1, 2, 3];
// console.log(a, b, c, a === b, a === c);

// push & pop
// const a = [1, 2, 3];
// a.push(4, 5, 6);
// a.pop();
// console.log(a);

// slugify
// const title = 'Metal Ballads Collection';
// console.log(title);
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
// const splitTitle = normalizedTitle.split(' ');
// console.log(splitTitle);
// const slugTitle = splitTitle.join('-');
// console.log(slugTitle);
// or
// const title = 'Metal Ballads Collection';
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);
// or
// const title = 'Metal Ballads Collection';
// const words = title.toLowerCase().split(' ');
// let slug = '';
// for (const word of words) {
//     slug += word + '-';
// }
// slug = slug.slice(0, (slug.length - 1));
// console.log(slug);
// or
// const title = 'Metal Ballads Collection';
// const words = title.toLowerCase().split(' ');
// let slug = '';
// for (let i = 0; i < words.length; i += 1) {
//     const isNotLastItem = i < words.length - 1;
//   slug += isNotLastItem ? words[i] + '-' : words[i];
// }
// console.log(slug);

// includes
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const query = 'Poly';
// message = friends.includes(query) ? 'is here' : 'is absent';
// console.log(`${query} ${message}`);

// concat
// const oldHellPatrol = ['Spirit Crusher', 'Death Dealer', 'Storm Bringer'];
// const addHellPatrol = ['Soul Stealer', 'Hellrider', 'Painkiller'];
// console.log(oldHellPatrol);
// console.log(addHellPatrol);
// const HellPatrol = oldHellPatrol.concat(addHellPatrol);
// console.log(HellPatrol);

// splice to remove
// const HellPatrol = [
//   'Spirit Crusher',
//   'Death Dealer',
//   'Storm Bringer',
//   'Soul Stealer',
//   'Hellrider',
//   'Painkiller',
// ];
// console.log(HellPatrol);
// const demonToRemove = 'Hellrider';
// console.log(demonToRemove);
// const index = HellPatrol.indexOf(demonToRemove);
// console.log(index);
// HellPatrol.splice(index, 1);
// console.log(HellPatrol);

// splice to add
// const HellPatrol = [
//   'Spirit Crusher',
//   'Death Dealer',
//   'Storm Bringer',
//   'Soul Stealer',
//   'Painkiller',
// ];
// console.log(HellPatrol);
// const demonToAdd = 'Hellrider';
// const index = 4;
// HellPatrol.splice(index, 0, demonToAdd);
// console.log(HellPatrol);

// splice to replace
// const theHellPatrol = [
//   'Spirit Crusher',
//   'Death Dealer',
//   'Storm Bringer',
//   'Soul Stealer',
//   'Painkiller',
// ];
// console.log(theHellPatrol);
// const demonToAdd = 'Hellrider';
// const demonToReplace = 'Storm Bringer';
// const index = theHellPatrol.indexOf(demonToReplace);
// theHellPatrol.splice(index, 1, demonToAdd);
// console.log(theHellPatrol);

// slice
// const theHellPatrol = [
//   'Spirit Crusher',
//   'Death Dealer',
//   'Storm Bringer',
//   'Soul Stealer',
//   'Hellrider',
//   'Painkiller',
//   'Exiled Archangel',
//   'Angel Ripper',
//   'Blasphemer',
//   'Ephemer',
// ];
// console.log(theHellPatrol);
// console.log(theHellPatrol.slice(1, 7));
// console.log(theHellPatrol.slice(1, 7).slice(5));

// slice
// const theHellPatrol = ['Spirit Crusher', 'Exiled Archangel', 'Ephemer'];
// console.log(theHellPatrol.slice(-1));

// function
// const add = function () {
//     console.log('WTF');
// }
// add();

// function
// const theHellPatrol = ['Spirit Crusher', 'Exiled Archangel', 'Ephemer'];
// const numbers = [1, 2, 3];
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems(theHellPatrol);
// logItems(numbers);

// function
// const theHellPatrol = ['Spirit Crusher', 'Exiled Archangel', 'Ephemer'];
// const demonToFind = 'Ephemer';
// const findDemon = function (names, name) {
//   for (const item of names) {
//     if (name === item) {
//       return 'is here';
//     }
//   }
//   return 'is absent';
// };
// console.log(`${demonToFind} ${findDemon(theHellPatrol, demonToFind)}`);

// function slugify string
// const slugify = function (string) {
//   const words = string.toLowerCase().split(' ');
//   const slug = words.join('-');
//   return slug;
// };
// const title = 'Grandis Spiritus Diabolos';
// const titleSlugged = slugify(title);
// console.log(titleSlugged);

// function slugify array
// const slugify = function (string) {
//   const words = string.toLowerCase().split(' ');
//   const slug = words.join('-');
//   return slug;
// };
// const titles = [
//   'Grandis Spiritus Diabolos',
//   'Spirit Crusher',
//   'Exiled Archangel',
// ];
// const titlesSlugged = [];
// for (const title of titles) {
//     const slugged = slugify(title);
//     titlesSlugged.push(slugged);
// }
// console.log(titlesSlugged);

// function smallest number from array
// const findSmallestNumber = function (numbersArray) {
//     let smallestNumber = numbersArray[0];
//     for (let i = 1; i < numbersArray.length; i += 1) {
//       if (numbersArray[i] < smallestNumber) {
//         smallestNumber = numbersArray[i];
//       }
//     }
//     return smallestNumber;
// }
// const numbers = [67, 45, 3, 78, 90, 2];
// const smallestNumber = findSmallestNumber(numbers);
// console.log(smallestNumber);

// function remove card
// const removeCard = function (allCards, cardToRemove) {
//   const index = allCards.indexOf(cardToRemove);
//   allCards.splice(index, 1);
// };
// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
// removeCard(cards, 'card-3')
// console.log(cards);

// function remove card with checking index=-1 - this is guard clause
// const removeCard = function (allCards, cardToRemove) {
//   const index = allCards.indexOf(cardToRemove);
// //guard clause start
//   if (index === -1) {
//     console.log('There is nothing to remove');
//     return;
//   }
// //guard clause end
//   allCards.splice(index, 1);
// };
// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
// removeCard(cards, 'card-32')
// console.log(cards);

// function add card
// const addCard = function (allCards, cardToInsert, position) {
//   allCards.splice(position - 1, 0, cardToInsert);
// };
// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
// addCard(cards, 'card-88', 2);
// console.log(cards);

// add tag manual
// const posts = ['post-1', 'post-2', 'post-3', 'post-4'];
// const tag = '#js';
// const postsWithTag = [];
// for (const post of posts) {
//   postsWithTag.push(`${post}${tag}`);
// }
// console.log(postsWithTag);

// add tag function
// const addTag = function (tag, ...args) {
//   const postsWithTag = [];
//   for (const arg of args) {
//     postsWithTag.push(`${arg}${tag}`);
//   }
//   return postsWithTag;
// }
// addTag('#js', 'post-1', 'post-2', 'post-3', 'post-4');
// console.log(addTag('#js', 'post-1', 'post-2', 'post-3', 'post-4'));

// MODULE 3

// const hotel = {
//   name: 'Hell Hotel',
//   stars: 5,
//   capacity: 666,
// };
// console.log(hotel.stars);
// hotel.stars = 6;
// console.log(hotel.stars);

// меняем свойство объекта
// const hotel = {
//   name: 'Hell Hotel',
//   stars: 6,
//   capacity: 666,
// };
// console.log(hotel);
// hotel.guests = ['Satan', 'Devil', 'Teufel'];
// console.log(hotel);

// this - метод для работы с объектом хранится в этом же объекте
// const hotel = {
//   name: 'Hell Hotel',
//   stars: 6,
//   capacity: 666,
//   updateName: function (newName) {
//       this.name = newName;
//   },
// };
// console.log(hotel.name);
// hotel.updateName('Helvete Hotel');
// console.log(hotel.name);

// for in для объекта
// const hotel = {
//   name: 'Hell Hotel',
//   stars: 6,
//   capacity: 666,
// };
// for (const key in hotel) {
//   console.log(hotel[key]);
// }

// конструктор Object статический метод keys
// const hotel = {
//   name: 'Hell Hotel',
//   stars: 6,
//   capacity: 666,
// };
// const allKeys = Object.keys(hotel);
// console.log(allKeys);
// const keyNumber = (allKeys.length);
// console.log(keyNumber);

// конструктор Object статический метод values
// const hotel = {
//   name: 'Hell Hotel',
//   stars: 6,
//   capacity: 666,
// };
// const allValues = Object.values(hotel);
// console.log(allValues);

// конструктор Object статический метод entries
// const hotel = {
//   name: 'Hell Hotel',
//   stars: 6,
//   capacity: 666,
// };
// const allEntries = Object.entries(hotel);
// console.log(allEntries);

// массив объектов и поиск по имени
// const hellPatrol = [
//   { name: 'Spirit Crusher', online: false },
//   { name: 'Exiled Archangel', online: true },
//   { name: 'Ephemer', online: true },
//   { name: 'Death Dealer', online: false },
// ];
// const findDevilByName = function (allDevils, name) {
//   for (const devil of allDevils) {
//     if (devil.name === name) {
//       if (devil.online) {
//         return `${name} is online`;
//       }
//       return `${name} is offline`;
//     }
//   }
//   return `${name} is out of Hell Patrol`;
// };
// console.log(findDevilByName(hellPatrol, 'Death Dealer'));

// массив объектов и массив имен
// const hellPatrol = [
//   { name: 'Spirit Crusher', online: false },
//   { name: 'Exiled Archangel', online: true },
//   { name: 'Ephemer', online: true },
//   { name: 'Death Dealer', online: false },
// ];
// const getAllNames = function (arr) {
//   const names = [];
//   for (const name of arr) {
//     names.push(name.name);
//   }
//   return names;
// };
// console.log(getAllNames(hellPatrol));

// массив объектов и поиск имен которые онлайн
// const hellPatrol = [
//   { name: 'Spirit Crusher', online: false },
//   { name: 'Exiled Archangel', online: true },
//   { name: 'Ephemer', online: true },
//   { name: 'Death Dealer', online: false },
// ];
// const getOnlineDevils = function (allDevils) {
//   const onlineDevils = [];
//   for (const devil of allDevils) {
//     if (devil.online) {
//       onlineDevils.push(devil.name);
//     }
//   }
//   return onlineDevils;
// };
// console.log(getOnlineDevils(hellPatrol));

// деструктуризация объекта по имени свойства
// (дано:)
// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };
// console.log('Name: ', hotel.name);
// console.log('Stars: ', hotel.stars);
// console.log('Capacity: ', hotel.capacity);
// // (деструктуризация:)
// const { name, stars, capacity } = hotel;
// console.log('Name: ', name);
// console.log('Stars: ', stars);
// console.log('Capacity: ', capacity);
// // значение по умолчанию
// const { location = 'California' } = hotel;
// console.log('Location: ', location);

// деструктуризация например
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// const showHotelInfo = function (hotelStats) {
//   console.log(hotelStats);
//   const { name, stars, capacity } = hotelStats;
//   console.log('Name: ', name);
//   console.log('Stars: ', stars);
//   console.log('Capacity: ', capacity);
// };
// showHotelInfo(hotel);

// можно деструктурировать сразу на входе в функцию:
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// const showHotelInfo = function ({ name, stars, capacity }) {
//   console.log('Name: ', name);
//   console.log('Stars: ', stars);
//   console.log('Capacity: ', capacity);
// };
// showHotelInfo(hotel);

// деструктуризация с именем которое не совпадает с именем свойства:
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// const showHotelInfo = function ({ name: hotelName, stars, capacity }) {
//   console.log('Name: ', hotelName);
//   console.log('Stars: ', stars);
//   console.log('Capacity: ', capacity);
// };
// showHotelInfo(hotel);

// глубокая деструктуризация
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;
// console.log(name, tag, location, avatar, followers, views, likes);

// rest
// const hotel = {
//   name: 'Helvete',
//   stars: 13,
//   capacity: 666,
// };
// const { name, ...rest } = hotel;
// console.log(name);
// console.log(rest);

// деструктуризация массива по очереди
// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;
// console.log(red, green, blue);

// деструктуризация и rest
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location, restProps);

// MODULE 4

// callback
// const greet = function (name) {
//   console.log(`Hello ${name}`);
// };
// const greetWithName = function(callback){
//     const name = 'Devil';
//   callback(name);
// };
// greetWithName(greet);

// callback
// const buttonRef = document.querySelector('button');
// const handleButtonClick = function () {
//   console.log('Click');
// };
// buttonRef.addEventListener('click', handleButtonClick);

// callback
// console.log('String before timeout');
// setTimeout(function () {console.log('inside timeout')}, 1000);
// console.log('String after timeout');

// // callback
// const printMessage = function(message) {
//   console.log(message);
// };
// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };
// higherOrderFunction(printMessage);

// // переменной adder присваивается описание функции и затем её можно использовать как функцию
// let val = 7;
// function createAdder() {
//   function addNumbers(a, b) {
//     let ret = a + b;
//     return ret;
//   }
//   return addNumbers;
// }
// let adder = createAdder();
// // console.log(adder);
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);

// // замыкание
// function createCounter() {
//   let counter = 0;
//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };
//   return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);

// // замыкание
// let c = 4
// function addX(x) {
//   return function(n) {
//      return n + x
//   }
// }
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)

const printValue = function(value) {
  console.log(value);
};

const prettyPrint = function(value) {
  console.log('Logging value: ', value);
};

const repeat = function(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};
repeat(3, printValue); // printValue - callback
repeat(3, prettyPrint); // prettyPrint - callback
// http://fecore.net.ua/books/m5ph3r-javascript/module-04/callbacks.html