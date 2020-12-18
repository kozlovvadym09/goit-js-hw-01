'use strict'
let credits = 23580;

const pricePerDroid = 3000;

let totalPrice;

let orderAmount = prompt('Укажите количество дроидов для покупки');


if (orderAmount === null) {
   orderAmount = 'Отменено пользователем!';
   console.log(orderAmount);

} else if (orderAmount = Number(orderAmount)) {
   totalPrice = pricePerDroid * orderAmount;
}


if (credits < totalPrice) {
   console.log('Недостаточно средств на счету!');

} else if (credits > totalPrice) {
   credits -= totalPrice;
   alert(`'Вы купили ${orderAmount} дроидов, на счету осталось ${credits} кредитов.'`);
}