/*
https://www.npmjs.com/package/webpack-serve
Если не работает dev - server, предпримите следующие шаги:
Delete package-lock.json file.
 Change following in package.json.
"webpack": "^4.32.2",
"webpack-cli": "^3.3.0",
"webpack-dev-server": "^3.11.0"
Run npm install
*/

// Задача - дополнить функцию makeMessages чтобы работало как в вызовах

const accounts = [
  { email: 'adrian@coolmail.com', expenses: 3754 },
  { email: 'artemis@mail.net', expenses: 6459 },
  { email: 'solomon@topmail.ua', expenses: 1278 },
  { email: 'derek@mail.com', expenses: 1691 },
  { email: 'julian@demail.com', expenses: 8903 },
  { email: 'jacob@rumail.de', expenses: 5812 }
];
​
function composeEmail(discount) {
  return `Уважаемый ${this.email}, теперь у вас постоянная скидка ${
    discount * 100
  } процентов.`;
}
​
// Возращает массив строк - сообщений для почты, результатов работы composeEmail
// accounts - массив обьектов
// threshold - минимум денег которые надо было потратить для скидки
// threshold - скидка в диапазоне 0-1
// onCompose - колбэк который надо вызывать если человек потратил больше чем threshold
function makeMessages({ accounts, threshold, discount, onCompose }) {}
​
console.log(
  makeMessages({
    accounts,
    threshold: 5000,
    discount: 0.1,
    onCompose: composeEmail
  })
);
​
// [
//   'Уважаемый artemis@mail.net, теперь у вас постоянная скидка 10 процентов.',
//   'Уважаемый julian@demail.com, теперь у вас постоянная скидка 10 процентов.',
//   'Уважаемый jacob@rumail.de, теперь у вас постоянная скидка 10 процентов.'
// ]
​
console.log(
  makeMessages({
    accounts,
    threshold: 8000,
    discount: 0.2,
    onCompose: composeEmail
  })
);
​
// [
//   'Уважаемый julian@demail.com, теперь у вас постоянная скидка 20 процентов.'
// ]