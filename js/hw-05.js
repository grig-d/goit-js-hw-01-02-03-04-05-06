// https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=892345q58

// // Задача 5-1
// // Write code under this line
// const Account = function (login, email) {
//   (this.login = login), (this.email = email);
// };
// Account.prototype.getInfo = function () {
//   return `login : ${this.login}, email: ${this.email}`;
// };
// // console.log(typeof Account.prototype.getInfo);
// // 'function'
// // const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// // console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'
// // const poly = new Account( 'Poly', 'poly@mail.com');
// // console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

// // Задача 5-2
// // Write code under this line
// const User = function (name, age, followers) {
//   (this.name = name), (this.age = age), (this.followers = followers);
// };
// User.prototype.getInfo = function () {
//   return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
// };
// // console.log(typeof User);
// // 'function'
// // const mango = new User('Mango', 2, 20);
// // console.log(mango.getInfo());
// // 'User Mango is 2 years old and has 20 followers'
// // console.log(typeof mango.getInfo);
// // 'function'
// // const poly = new User( 'Poly', 3, 17);
// // console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'

// // Задача 5-3
// // Write code under this line
// const Storage = function (items) {
//   this.items = items;
// };
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (item) {
//   this.items.push(item);
// };
// Storage.prototype.removeItem = function (item) {
//   if (this.items.includes(item)) {
//     this.items.splice(this.items.indexOf(item), 1);
//   }
// };
// // console.log(typeof Storage);
// // 'function'
// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];
// // const storage = new Storage(goods);
// // console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */
// // storage.addItem('Дроид');
// // console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */
// // storage.removeItem('Пролонгер');
// // console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// Задача 5-4
// 42-39