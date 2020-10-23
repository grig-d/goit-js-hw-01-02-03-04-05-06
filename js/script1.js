let balance = 10000
const payment = 2000
console.log(`Сумма заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету:`)
if (balance >= payment) {
    balance = balance - payment;
    console.log(`Всё хорошо! Снимаем деньги, спасибо за покупку!`);
    console.log(`На счету осталось ${balance} кредитов`);
}
// 1-36
