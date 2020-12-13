// https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=vwxyz0169

// // 4
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };
//   // Пиши код ниже этой строки
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[numberOfTags - 1];
//   // Пиши код выше этой строки

// // 10
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// // Массив однотипных объектов
// // 17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// // Поиск объекта по значению свойства
// // 18
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Пиши код выше этой строки
// }
// console.log(getProductPrice('Радар')); // 1300
// console.log(getProductPrice('Двигатель')); // null

// // Коллекция значений свойства
// // 19
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const allPropValues = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       allPropValues.push(product[propName]);
//     }
//   }
//   return allPropValues;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('price')); //[1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); //[]

// // Общая стоимость товара
// // 20
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }
//     return 0;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Бластер')); //0
// console.log(calculateTotalPrice('Захват')); //10800

// // деструктуризация
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const { yesterday, today, tomorrow } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature); //29

// // деструктуризация с новыми именами переменных
// // 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature); //29

// // глубокая деструктуризация
// // 25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// // деструктуризация паттерн объект настроек
// // 26
// const forecast = {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 },
// };
// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature(forecast));

// // spread распыление массивов
// // 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores); // Math.max(89, 64, 42, 17, 93, 51, 26)
// const worstScore = Math.min(...scores);

// // spread распыление массивов
// // 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// // spread распыление объектов
// // 29
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// // 30
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   return { category, priority, ...data, completed };
//   // Пиши код выше этой строки
// }
// console.log(
//   makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }),
// ); // { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' })); // { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' })); // { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }
// console.log(makeTask({ text: 'Купить хлеб' })); // { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }

// // rest
// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   return total;
//   // Пиши код выше этой строки
// }

// // splice
// // 35
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//       const index = this.books.indexOf(oldName);
//       if (index >= 0) {
//           this.books.splice(index, 1, newName);
//       }
//       console.log(this.books);
//     // Пиши код выше этой строки
//   },
// };
// bookShelf.updateBook('Мгла', 'Хроники подземелий');
// console.log(bookShelf);
// bookShelf.updateBook('Последнее королевство', 'Дюна');
// console.log(bookShelf);

// // 36 37 38 39 40
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const index = this.potions.indexOf(potionName);
//     if (index >= 0) {
//       this.potions.splice(index, 1);
//     }
//   },
//   updatePotionName(oldName, newName) {
//     const index = this.potions.indexOf(oldName);
//     if (index >= 0) {
//       this.potions.splice(index, 1, newName);
//     }
//     },

// };
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion('Невидимка');
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion('Зелье силы');
// console.log(atTheOldToad.getPotions());
// atTheOldToad.removePotion('Невидимка');
// console.log(atTheOldToad.getPotions());
// atTheOldToad.removePotion('Зелье силы');
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
// console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка');
// console.log(atTheOldToad.getPotions());

// // 41
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     let potionIndex = -1;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         potionIndex = i;
//         break;
//       }
//     }
//     if (potionIndex === -1) {
//       return `Зелья ${potionName} нет в инвентаре!`;
//     }
//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     let potionIndex = -1;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         potionIndex = i;
//         break;
//       }
//     }
//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }
//     this.potions[potionIndex].name = newName;
//   },
//   // Пиши код выше этой строки
// };
// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
// atTheOldToad.removePotion('Дыхание дракона');
// atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
// console.log(atTheOldToad.getPotions());
