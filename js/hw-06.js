// import users from './hw-06-users.js';
// // https://homework-js-autocheck.goit.ua/?token=e67afab47edc86c16faa101e36f4bbc165f5f19c4634c61fe67897feba9b9227&block=92345qr59

// // Задача 1
// // Получи массив имен всех пользователей (свойство name) используя деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.
// const getUserNames = array => array.map(({ name }) => name);
// console.log(getUserNames(users)); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// // Задача 2
// // Получи массив объектов пользователей, отобранный по цвету глаз (свойство eyeColor), используя деструктурирующее присваивание для параметра функции ({eyeColor})
// const getUsersWithEyeColor = (array, color) =>
//   array.filter(({ eyeColor }) => eyeColor === color);
// console.log(getUsersWithEyeColor(users, 'blue'));

// // Задача 3
// // Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender).
// const getUsersWithGender = (array, gender) =>
//   array.filter(user => user.gender === gender).map(({ name }) => name);
// console.log(getUsersWithGender(users, 'male')); // ["Moore Hensley", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]

// // Задача 4
// // Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive)
// // Используй деструктурирующее присваивание для параметра функции ({isActive})
// const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);
// console.log(getInactiveUsers(users));

// // Задача 5
// // Получи объект пользователя (не массив) по уникальному значению свойства email
// // Используй деструктурирующее присваивание для параметра функции ({email})
// const getUserWithEmail = (array, mail) =>
//   array.find(({ email }) => email === mail);
// // players.find((player) => { return player.id === playerToFind; });
// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

// // Задача 6
// // Получи массив из объектов, которые состоят только из свойств name и email тех пользователей, которые попадают в возрастную категорию от min до max лет (значение свойства age)
// const getUsersWithAge = (array, min, max) => array.filter(({ age }) => age > min && age < max).map(({ name, email }) => ({['name']: name, ['email']: email}));
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// // Задача 7
// // Получи общую сумму баланса (сумму значений свойства balance) всех пользователей
// // Используй деструктурирующее присваивание для параметра функции {balance}
// const calculateTotalBalance = array => array.reduce((accu, {balance}) => { return accu + balance;}, 0);
// console.log(calculateTotalBalance(users)); // 20916

// // Задача 8
// // Получи массив имен всех пользователей у которых есть друг с заданным именем
// // Используй деструктурирующее присваивание для параметра функции {friends} и ({name})
// const getUsersWithFriend = (array, friendName) => array.filter(({ friends }) => friends.includes(friendName)).map(({name}) => name);
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// // Задача 9
// // Получи массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// // Избегаем мутации исходного массива: т.к. метод sort изменяет (мутирует) исходный массив, то следует сделать копию массива и сортировать уже копию, а не исходный массив.
// // Используй деструктурирующее присваивание для параметра функции ({name})
// const getNamesSortedByFriendsCount = array =>
//   array
//     .slice()
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// console.log(getNamesSortedByFriendsCount(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// // Задача 10
// // Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке
// // const getSortedUniqueSkills = array => array.reduce((accu, { skills }) => { return [...accu, ...skills]; }, []);
// const getSortedUniqueSkills = array =>
//   array
//     .reduce((accu, { skills }) => {
//       return [...accu, ...skills];
//     }, [])
//     .filter((element, index, array) => {
//       return array.hasOwnProperty(element) ? false : (array[element] = true);
//     })
//     .sort();
// console.log(getSortedUniqueSkills(users));
// /* [ 'adipisicing', 'amet',
//  'anim', 'commodo',
//  'culpa', 'elit',
//  'ex', 'ipsum',
//  'irure', 'laborum',
//  'lorem', 'mollit',
//  'non', 'nostrud',
//  'nulla', 'proident',
//  'tempor', 'velit',
//  'veniam' ]; */

// //  DONE
