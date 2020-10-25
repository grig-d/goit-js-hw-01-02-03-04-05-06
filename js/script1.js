let balance = 10000
const payment = 2000
console.log(`Сумма заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету:`)
if (balance >= payment) {
	balance = balance - payment
	console.log(`Всё хорошо! Снимаем деньги, спасибо за покупку!`)
	console.log(`На счету осталось ${balance} кредитов`)
} else {
	console.log('На счету недостаточно средств для проведения операции!')
}

const totalExpenses = 20000
let discount = 0
if (totalExpenses >= 100 && totalExpenses < 1000) {
	discount = 2
	console.log('Бронзовый партнер, скидка 2%')
} else if (totalExpenses >= 1000 && totalExpenses < 5000) {
	discount = 5
	console.log('Серебряный партнер, скидка 5%')
}
