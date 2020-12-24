// https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=bcdefgh77

// // Задача 1
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Пиши код ниже этой строки
// const child = Object.create(parent);
// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// // Задача 3
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// // паттерн Объект настроек - функция принимает один параметр - объект со свойствами
// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }
// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// const poly = new User({ name: 'Поли', email: 'poly@mail.com' });

// // функция принимает один параметр - объект со свойствами
// // Задача 4
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// // Задача 5
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function () {
//   return this.price;
// };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// // Задача 6
// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (item) {
//   this.items.push(item);
// };
// Storage.prototype.removeItem = function (item) {
//   const index = this.items.indexOf(item);
//   if (index !== -1) {
//     return this.items.splice(index, 1);
//   }
// };
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// // Задача 7
// function StringBuilder(baseValue) {
// this.value = baseValue;};
// StringBuilder.prototype.getValue = function() {
//   return this.value;
// };
// StringBuilder.prototype.padEnd = function(str) {
//   this.value += str;
// };
// StringBuilder.prototype.padStart = function(str) {
//   this.value = str + this.value;
// };
// StringBuilder.prototype.padBoth = function(str) {
//   this.value = str + this.value + str;
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// // Задача 9
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// // Задача 10
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// // приватное свойство
// // Задача 11
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// Задача 12
function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (newItem) {
  this.items.push(newItem);
};

Storage.prototype.removeItem = function (item) {
  const itemIndex = this.items.indexOf(item);
  this.items.splice(itemIndex, 1);
};

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]