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

// // деструктуризация массива по очереди
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

// // callback
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }
// // higher order function
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }
// registerGuest('Манго', greet);
// // Мы передали ссылку на функцию greet как аргумент,
// // поэтому она будет присвоена в параметр callback и вызвана внутри функции registerGuest через круглые скобки

// // несколько callback
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }
// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }
// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }
// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }
// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

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

// // Передаём инлайн функцию greet как колбек
// registerGuest('Манго', function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбек
// registerGuest('Поли', function notify(name) {
//   consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

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

// // callback
// const printValue = function (value) {
//   console.log(value);
// };
// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };
// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };
// repeat(3, printValue); // printValue - callback
// repeat(3, prettyPrint); // prettyPrint - callback

// // callback
// const printName = function (name) {
//   console.log(name);
// };
// const arrayName = ['Spirit Crusher', 'Exiled Archangel', 'Ephemer'];
// const repeatFu = function (arr, action) {
//   for (let i = 0; i < arr.length; i++) {
//     action(arr[i]);
//   };
// };
// repeatFu(arrayName, printName);

// // callback
// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };
// const labels = [];
// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });
// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// // callback + bind
// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }
// makeMessage(customer.getFullName.bind(customer)); // колбеком передаем копию метода getFullName с привязанным контекстом к объекту customer

// // фильтрация массива
// const filter = function (array, test) {
//   //test is callback
//   const filteredElements = [];
//   for (const element of array) {
//     const passed = test(element);
//     if (passed) {
//       filteredElements.push(element);
//     }
//   }
//   return filteredElements;
// };
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];
// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas
// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// Замыкание closure
// const createCounter = function () {
//   // Локальная переменная privateValue доступна только в замыкании.
//   // Получить к ней доступ во внешнем коде невозможно.
//   let privateValue = 0;
//   const increment = function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };
//   return {
//     increment,
//   };
// };
// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2
// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3

// // плохой подход без замыкания:
// const makeDish = function(shefName, dish) {
//     console.log(`${shefName} is cooking ${dish}`);
// };
// makeDish('Devil', 'apple pie');
// makeDish('Devil', 'hell juice');
// makeDish('Devil', 'burger from hell');

// // хороший подход с замыканием - каррирование
// const makeShef = function (name) {
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };
// const devil = makeShef('Devil');
// const teufel = makeShef('Teufel');
// devil('apple pie');
// devil('hell juice');
// teufel('burger from hell');
// teufel('potato');

// // Замыкание closure
// function fu() {
//   const x = 5;
//   return function () {console.log(x)};
// }
// const outerFu = fu();
// outerFu(); // замыкание запомнило значение 5 из лек.окружения

// // Замыкание closure
// const fnA = function (a) {
//     return function fnB(b) {
//         return function fnC(c) {
//             console.log(a, b, c);
//         };
//     };
// };
// const res = fnA(5)(10);
// res(15);

// // контекст this
// const showTag = function () {
//   console.log('this.tag: ', this.tag);
// };
// const user = {
//     tag: 'Spirit Crusher',
// };
// user.fu = showTag; //{tag: "Spirit Crusher", fu: ƒ}
// user.fu();

// // контекст this
// const user = {
//   tag: 'Spirit Crusher',
//   //здесь showTag() это метод объекта
//   showTag() {
//     console.log('this.tag: ', this.tag);
//   },
// };
// user.showTag();

// // call
// // вместо этого:
// const showTag = function () {
//   console.log('this: ', this);
//   console.log('this.tag: ', this.tag);
// };
// const mango = {
//   tag: 'Mango',
//   showTag,
// };
// const poly = {
//   tag: 'Poly',
//   showTag,
// };
// mango.showTag();
// poly.showTag();
// вот это:
// // (чтобы не копировать метод showTag в каждый объект)
// // можно вызвать функцию в контексте какого-то объекта не делая её методом
// const showTag = function () {
//   console.log('this: ', this);
//   console.log('this.tag: ', this.tag);
// };
// const mango = {
//   tag: 'Mango',
// };
// const poly = {
//   tag: 'Poly',
// };
// showTag.call(mango);
// showTag.call(poly);

// // call
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }
// const mango = { username: 'Манго' };
// const poly = { username: 'Поли' };
// greetGuest.call(mango, 'Добро пожаловать'); // Добро пожаловать, Манго.
// greetGuest.call(poly, 'С приездом'); // С приездом, Поли.

// // bind (привязка контекста)
// const showTag = function () {
//   console.log('this: ', this);
//   console.log('this.tag: ', this.tag);
// };
// const mango = {
//   tag: 'Mango',
// };
// const poly = {
//   tag: 'Poly',
// };
// const showMangoTag = showTag.bind(mango);
// showMangoTag();
// const showPolyTag = showTag.bind(poly);
// showPolyTag();

// // можно брать метод одного объекта и байндить его к другому объекту, у которого нет такого метода
// const mango = {
//   tag: 'Mango',
//   showTag() {
//     console.log(this.tag);
//   },
// };
// const poly = {
//   tag: 'Poly',
// };
// const showPolyTag = mango.showTag.bind(poly);
// showPolyTag();

// function showThis() {
//   console.log('this in showThis: ', this);
// }
// showThis();
// const user = { name: 'Mango' };
// user.showContext = showThis;
// user.showContext();

// const greet = function() {
//   return `Wellcome to ${this.name} hotel!`;
// };
// const hotel = { name: 'Resort Hotel' };
// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"

// const greet = function(guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };
// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };
// console.log(greet.call(hotel, 'Mango', 5));
// // "Mango, wellcome to 5-star Resort Hotel!"
// console.log(greet.call(motel, 'Poly', 4));
// // "Poly, wellcome to 4-star Sunlight Motel!"

// // bind
// const greet = function(guest) {
//   return `${guest}, welcome to ${this.name}!`;
// };
// const hotel = { name: 'Resort Hotel' };
// const hotelGreeter = greet.bind(hotel, 'Mango');
// console.log(hotelGreeter()); // "Mango, wellcome to Resort Hotel!"

// // bind and callback
// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };
// const fn = function(callback) {
//   callback();
// };
// // Передаем копию метода showThis с контекстом привязанным к hotel
// fn(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}

// // bind
// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }
// const steam = { service: 'Steam' };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."
// const gmail = { service: 'Gmail' };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."

// ООП

// // прототип
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Пёс';
// console.log(dog); // {name: 'Пёс'}
// console.log(dog.name); // 'Пёс'
// console.log(dog.legs); // 4

// // проверка на собственноые свойства
// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   rating: 8.38,
// };
// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }
//   // Если это не собственное свойство - ничего не делаем
// }

// // конструктор
// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;
// };
// // Manager - это конструктор с одинаковым набором свойств, но значения в экземплярах разные:
// const mango = new Manager('Mango', 5); // экземпляр объекта
// console.log(mango); // Manager {name: "Mango", sales: 5}
// const poly = new Manager('Poly', 10); // экземпляр объекта
// console.log(poly); // Manager {name: "Poly", sales: 10}

// // конструктор прототип
// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;
// };
// // sell - кастомное свойство, которое не является свойством каждого экземпляра, но доступно экземпляру как метод
// Manager.prototype.sell = function () {
//     this.sales += 1;
// }
// // Manager - это конструктор с одинаковым набором свойств, но значения в экземплярах разные:
// const mango = new Manager('Mango', 5); // экземпляр объекта
// console.log(mango); // Manager {name: "Mango", sales: 5}
// const poly = new Manager('Poly', 10); // экземпляр объекта
// console.log(poly); // Manager {name: "Poly", sales: 10}

// // Магазин
// const Manager = function (name = 'manager', sales = 0) {
//     this.name = name;
//     this.sales = sales;

//     this.sell = function (product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}.`;
//     };
//   };

// // Прототип - это резервное хранилище свойств и методов объекта
// const animal = { eats: true };
// const dog = { barks: true };
// dog.__proto__ = animal;
// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true

// [[Prototype]] - свойство объекта в спецификации
// __proto__ - свойство объекта в консоли - в нем ссылка на другой объект или Object

// // Hero - общий конструктор с дефолтными полями общими для всех классов
// // Warrior и Wizard - конструкторы, которые имеют свои собственные поля, а также должны иметь доступ к полям Hero
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };
// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };
// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }
// mango.gainXp(500);
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }
// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);
//   this.weapon = weapon;
// };
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };
// const poly = new Warrior('Poly', 200, 'sword');
// console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
// poly.attack(); // Poly attacks with sword
// poly.gainXp(300); // Poly gained 300 experience points

// // Класс
// class Guest {
//   constructor(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }
//   getFullInfo() {
//     //это метод класса, доступен всем экземплярам через prototype
//     console.log(`Guest ${this.name} Room number ${this.roomNumber}`);
//   }
// }
// const mango = new Guest('Mango', 26);
// console.log(mango);
// mango.getFullInfo(); // Guest Mango Room number 26

// // статические методы
// class Calc {
//   // Класс-калькулятор для двух аргументов
//   constructor() {}
//   // Метод как замена свойству
//   static get PI() {
//     return 3.14;
//   }
//   // Статический метод +
//   static add(...args) {
//     return args.reduce((acc, next) => acc + next, 0);
//   }
//   // Статический метод *
//   static mult(...args) {
//     return args.reduce((acc, next) => acc * next, 1);
//   }
// }
// console.log(Calc.PI); //3.14
// console.log(Calc.add(2, 3, 4)); //9
// console.log(Calc.mult(12, 3, 4)); //144

// // наследование классов extends
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   move() {
//     return console.log(`I, ${this.name}, am moving!`);
//   }
// }
// class Dog extends Animal {
//     constructor(name, breed) {
//         // Вызвать конструктор Animal с аргументом name
//         super(name);
//         this.breed = breed;
//     }
//     bark() {
//         console.log(`woof!`);
//     }
//     moveAndMakeSound() {
//         super.move();
//         this.bark();
//     }
// }
// const dog = new Dog('Mango', 'shepherd');
// console.log(dog); // Dog {name: "Mango", breed: "shepherd"}
// dog.move(); // I, Mango, am moving!
// dog.bark(); // woof!
// dog.moveAndMakeSound(); // I, Mango, am moving! woof!
// console.log(Animal.prototype); // методы Animal
// console.log(Dog.prototype); // методы Dog

// Модуль 5. Занятие 10. Классы[JS-18]

// // старт здесь:
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };
// const mango = new Hero('Mango', 1000);
// console.log(mango);
// // Hero {name: "Mango", xp: 1000}
// // mango это экземпляр Hero, это объект и в __proto__ у него лежит ссылка на свойство Hero.prototype; в этом свойстве хранятся методы для Hero
// // все экземпляры имеют доступ по ссылке к методам, которые лежат в Hero.prototype
// Hero.prototype.changeName = function (name) {
//   this.name = name;
// };
// // changeName - находится в Hero в свойстве prototype, а ссылка на него находится в __proto__ у экземпляра
// Hero.description = 'This is a Hero base class';
// // description - это статическое свойство и оно недоступно для экземпляров
// console.log(mango.description); // undefined
// // статический метод находится на самом конструкторе:
// Hero.showStats = function (hero) {
//   console.log('Logging stats from Hero.showStats: ', hero);
// };
// // и доступен только для класса, не для экземпляра; но доступен через имя самого класса:
// Hero.showStats(mango); // Logging stats from Hero.showStats:  Hero {name: "Mango", xp: 1000}

// // теперь переписываем на классах код после строки 'старт здесь:'
// class Hero {
//   static description = `This is a Hero base class`;
//   // showStats - статическое свойство на классе Hero
//   static showStats(hero) {
//     console.log('Logging stats from Hero.showStats: ', hero);
//   }
//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   }
//   // changeName - метод класса автоматически попадает в свойство prototype класса Hero и на него есть ссылка у экземпляра в свойстве __proto__:
//   changeName(name) {
//     this.name = name;
//   }
//   // gainXp - метод класса автоматически попадает в свойство prototype класса Hero и на него есть ссылка у экземпляра в свойстве __proto__:
//   gainXp(amount) {
//     console.log(`${this.name} получил ${amount} опыта`);
//     this.xp += amount;
//   }
// }
// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero {name: "Mango", xp: 1000}
// mango.gainXp(2000); // Mango получил 2000 опыта
// console.log(mango); // Hero {name: "Mango", xp: 3000}

// // геттер сеттер getter setter - синтаксис
// class Hero {
//   static description = `This is a Hero base class`;
//   static showStats(hero) {
//     console.log('Logging stats from Hero.showStats: ', hero);
//   }
//   constructor(name, xp) {
//     this._name = name;
//     this._xp = xp;
//   }
//   // геттер
//   get name() {
//     return this._name;
//   }
//   // сеттер
//   set name(newName) {
//     this._name = newName;
//   }
//   gainXp(amount) {
//     console.log(`${this.name} получил ${amount} опыта`);
//     this.xp += amount;
//   }
// }
// const mango = new Hero('Mango', 1000);
// // геттер - это не обращение к свойству, это метод, который не надо вызывать (не нужны скобки)
// console.log(mango.name); // Mango
// // сеттер
// mango.name = 'MangoDog';
// console.log(mango.name); // MangoDog

// // наследование
// class Hero {
//   constructor(name, xp) {
//     this._name = name;
//     this._xp = xp;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     this._name = newName;
//   }
//   gainXp(amount) {
//     console.log(`${this.name} получил ${amount} опыта`);
//     this.xp += amount;
//   }
// }
// // делаем класс, который расширяет класс Hero:
// class Warrior extends Hero {
//   //extends делает вот так: Warrior.prototype.__proto__ === Hero.prototype
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this._weapon = weapon;
//   }
//   attack() {
//     console.log(`${this._name} атакует используя ${this._weapon}`); // name надо взять от Hero, для этого используем наследование extends Hero
//   }
// }
// // const mango = new Hero('Mango', 1000);
// const mango = new Warrior('Mango', 1000, 'Sword');
// console.log(mango); // Hero {_name: "Mango", _xp: 1000}
// mango.attack(); // Mango атакует используя Sword
// mango.gainXp(2000);
// class Paladin extends Warrior {
//   constructor(name, xp, weapon, spell) {
//     super(name, xp, weapon);
//     this.spell = spell;
//   }
//   cast() {
//     console.log(`${this.name} бросает ${this.spell}`);
//   }
// }
// const poly = new Paladin('Poly', 800, 'Axe', 'Heal');
// console.log(poly); // Paladin {_name: "Poly", _xp: 800, _weapon: "Sword", spell: "Healing"}
// poly.attack();
// poly.gainXp(400);
// poly.cast();

// // приватное свойство
// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Будет ошибка, это приватное свойство

// // геттер и сеттер ещё раз
// class User {
//   name;
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   // Геттер email
//   get email() {
//     return this.#email;
//   }
//   // Сеттер email
//   set email(newEmail) {
//     if (newEmail === '') {
//       console.log('Ошибка! Почта не может быть пустой строкой!');
//       return;
//     }
//     this.#email = newEmail;
//   }
// }
// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// console.log(mango.email); // mango@mail.com
// mango.email = 'mango@supermail.com';
// console.log(mango.email); // mango@supermail.com

// // статическое свойство
// class User {
//   // Объявление и инициализация статического свойства
//   static TYPES = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #email;
//   #type;
//   constructor({ email, type }) {
//     this.#email = email;
//     this.#type = type;
//   }
//   get type() {
//     return this.#type;
//   }
//   set type(newType) {
//     if (newType === undefined) {
//       console.log('Ошибка! Такого типа пользователя не существет');
//       return;
//     }
//     this.#type = newType;
//   }
// }
// const mango = new User({
//   email: 'mango@mail.com',
//   type: User.TYPES.ADMIN,
// });
// console.log(mango.TYPES); // undefined
// console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }
// console.log(mango.type); // admin
// mango.type = User.TYPES.EDITOR;
// console.log(mango.type); // editor

// // Статические методы
// class User {
//   static #takenEmails = [];
//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }
//   #email;
//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }
// const mango = new User({ email: 'mango@mail.com' });
// console.log(
//   User.isEmailTaken('poly@mail.com')
// ); // false
// console.log(
//   User.isEmailTaken('mango@mail.com')
// ); // true

// стрелочные функции:
// // обычная ф-я
// const numbers = [1, 5, 2, 4, 3];
// const greaterThenTwo = numbers.filter(function (num) { return num > 2; });
// console.log(greaterThenTwo);
// // рефакторинг стрелка
// const numbersR = [1, 5, 2, 4, 3];
// const greaterThenTwoR = numbersR.filter(num => num > 2);
// console.log(greaterThenTwoR);

// // map
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// // получаем (новый) массив всех имен
// const playersNames = players.map(function (player) {
//   return player.name;
// });
// console.log(playersNames);
// // увеличиваем points каждому игроку и получаем (новый) массив
// const updatedPoints = players.map(function (player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });
// console.log(updatedPoints);
// // увеличиваем кол-во часов игрока по id
// const playerIdToUpdate = 'player-3';
// const updatedPlayers = players.map(function (player) {
//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
//   return player;
// });
// console.log(updatedPlayers);

// // map под капотом своими руками
// const numbers = [5, 10, 15, 20, 25];
// // создает и возвращает новый массив
// // перебирает оригинальный массив
// // вызывает колбек для каждого элемента
// // записывает результат вызова функции в новый массив
// const map = function (array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const result = callback(array[i], i, array);
//     newArray.push(result);
//   }
//   return newArray;
// };
// const doubledNumbers = map(numbers, function (number, index, array) {
//   return number * 2;
// });
// console.log(doubledNumbers);

// // filter
// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter(number => {
//     return number > 15;
// });
// console.log(filteredNumbers);

// // filter
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// const onlinePlayers = players.filter(player => {
//   return player.online;
// });
// console.log(onlinePlayers);
// const offlinePlayers = players.filter(player => {
//   return !player.online;
// });
// console.log(offlinePlayers);
// const hardcorePlayers = players.filter(player => {
//   return player.timePlayed > 250;
// });
// console.log(hardcorePlayers);

// // filter под капотом своими руками
// // создает новый массив и возвращает его
// // колбек для каждого элемента
// // если колбек вернет true пушит элемент в новый массив
// const filter = function (array, callback) {
//   const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//         const passed = callback(array[i], i, array);
//         if (passed) {
//             newArray.push(array[i]);
//         }
//   }
//   return newArray;
// };
// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = filter(numbers, function (number, index, array) {
//     return number > 15;
// });
// console.log(filteredNumbers);

// // find
// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find(n => {
//   return n === 15;
// });
// console.log(number);

// // find
// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find(n => {
//   return n > 15;
// });
// console.log(number);

// // find
// // найти игрока по id
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// const playerToFind = 'player-3';
// const player = players.find((player) => { return player.id === playerToFind; });
// console.log(player);

// // every
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];
// const isAllPlayersOnline = players.every(player => { return player.online; });
// console.log(isAllPlayersOnline);
// const averagedInPlayTime = players.every(player => { return player.timePlayed > 100; });
// console.log(averagedInPlayTime);

// // reduce
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce(function (accumulator, number) {
//   return accumulator + number;
// }, 0);
// console.log(total);

// // reduce пример
// // общая зарплата
// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };
// // reduce можно вызывать только на массиве, поэтому собираем значения объекта с массив
// const values = Object.values(salary);
// // console.log(values); // [100, 50, 150]
// const totalSalary = values.reduce((accu, value) => accu + value);
// console.log(totalSalary); // 300

// // reduce предыдущий пример + чейнинг
// // общая зарплата
// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };
// // chaining
// const totalSalary = Object.values(salary).reduce((accu, value) => accu + value);
// console.log(totalSalary); // 300

// // reduce считаем общее кол-во часов
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// const totalTimePlayed = players.reduce((time, player) => {
//   return time + player.timePlayed;
// }, 0);
// console.log(totalTimePlayed); // 1240

// // reduce считаем общую сумму товаров в корзине
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];
// const totalAmount = cart.reduce((total, item) => {
//   return total + item.price * item.quantity;
// }, 0);
// console.log(totalAmount); // 840

// // reduce собираем все теги
// const tweets = [
//   { id: '001', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '002', likes: 2, tags: ['html', 'css'] },
//   { id: '003', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '004', likes: 8, tags: ['css', 'react'] },
//   { id: '005', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// const allTags = tweets.reduce((tags, tweet) => {
//   tags.push(...tweet.tags);
//   return tags;
// }, []);
// console.log(allTags); // ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]
// // reduce статистика тегов из массива allTags грязная функция мутирует acc
// const tagsStatsDirty = allTags.reduce((accu, tag) => {
//   accu[tag] = accu.hasOwnProperty(tag) ? accu[tag] + 1 : 1;
//   return accu;
// }, {});
// console.log(tagsStatsDirty);
// // reduce статистика тегов из массива allTags чистая функция
// const tagsStatsClean = allTags.reduce((accu, tag) => {
//   return { ...accu, [tag]: accu.hasOwnProperty(tag) ? accu[tag] + 1 : 1 };
// }, {});
// console.log(tagsStatsClean);

// // sort
// const numbers = [1, 9, 6, 2, 3];
// console.log(numbers);
// numbers.sort((prev, next) => {
//   return prev - next;
// });
// // return prev - next // по возвростанию
// // return next - prev // по убыванию
// console.log(numbers);

// // sort сортировка массива объектов по значению свойства
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// const badPlayers = [...players].sort((prevPlayer, nextPlayer) => {
//   return prevPlayer.timePlayed - nextPlayer.timePlayed; // по возвростанию
// });
// console.log(badPlayers);
// const topPlayers = [...players].sort((prevPlayer, nextPlayer) => {
//   return nextPlayer.timePlayed - prevPlayer.timePlayed; // по убыванию
// });
// console.log(topPlayers);

// // sort
// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];
// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
// console.log(users.sort(sortByActiveDays));

// // without chaining
// const numbers = [1, 5, 2, 4, 3];
// const greaterThenTwo = numbers.filter(number => {
//   return number > 2;
// });
// console.log(greaterThenTwo);
// const multByTwo = greaterThenTwo.map(number => {
//   return number * 2;
// });
// console.log(multByTwo);
// const sorted = multByTwo.sort((a, b) => {
//   return a - b;
// });
// console.log(sorted);
// // chaining
// const chaining = numbers
//   .filter(number => number > 2)
//   .map(number => number * 2)
//   .sort((a, b) => b - a);
// console.log(chaining);

// // chaining сортируем игроков онлайн
// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];
// const onlineSorted = players
//   .filter(player => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => nextPlayer.rank - prevPlayer.rank);
// console.table(onlineSorted);

// Деструктурирующее присваивание ДП
// // 1. Объект как параметр без ДП
// const object = {num : 2}
// function getNum (obj) { return obj.num; }
// console.log(getNum(object)) // 2
// // 2. ДП
// const object = {num : 2}
// // const num  =  object.num;
// const { num } = object;
// console.log(num) // 2
// 3. Объект как параметр c ДП
// const object = {num : 2}
// //function getNum (obj) { return obj.num; }
// function getNum ({num}) { return num; }
// console.log(getNum(object)) // 2

// // Деструктурирующее присваивание ДП
// const person = {
//   name: 'Eddie',
//   age: 24,
// };
// function introduce({ name, age }) {
//     return (`I'm ${name} and I'm ${age} years old!`);
// }
// console.log(introduce(person));

// // Деструктурирующее присваивание ДП
// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];
// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);
// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// // Деструктурирующее присваивание ДП
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// // Напишем функцию для подсчета лайков из коллекции
// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(countLikes(tweets)); // 32

// // Создание анонимных объектов:
// const arr = Array(3).fill('').map((e, i) => ({ ['index']: i }));
// console.log(arr);

// QnA

// // timer
// const arr = new Array(100);
// console.time('map');
// arr.map(el => el);
// console.timeEnd('map');

// Шаг 1
// // Object.entries()
// const options = {
//     yellow: true,
//     blue: false,
//     teal: false,
//     orange: true,
//     rosered: true,
//     violet: false,
// };
// const entries = Object.entries(options);
// console.log(entries);
// // фильтруем только те цвета которые true
// const selectedOptions = entries.filter(entry => { return entry[1] });
// console.log(selectedOptions);
// // получаем массив выбранных цветов
// const colors = selectedOptions.map(option => option[0]);
// console.log(colors);

// Шаг 2
// // рефакторинг предыдущего кода в чейнинг
// const options = {
//   yellow: true,
//   blue: false,
//   teal: false,
//   orange: true,
//   rosered: true,
//   violet: false,
// };
// const colors = Object.entries(options)
//   .filter(entry => {
//     return entry[1];
//   })
//   .map(option => option[0]);
// console.log(colors);

// Шаг 3
// деструктуризация массива
<<<<<<< Updated upstream
const options = {
  yellow: true,
  blue: false,
  teal: false,
  orange: true,
  rosered: true,
  violet: false,
};
const colors = Object.entries(options)
  .filter(([, selected]) => selected)
  .map(([color]) => color);
console.log(colors);
=======
// 16-00
>>>>>>> Stashed changes
