'use strict'


let credits = 23580;

const pricePerDroid = 3000;

let orderAmount = prompt('Укажите количество дроидов для покупки');

let totalPrice;

let message = 'Отменено пользователем!';


if (orderAmount === null) {
   console.log(message);
   
} else totalPrice = pricePerDroid * orderAmount;

if (credits < totalPrice) {
   message = 'Недостаточно средств на счету!';
   console.log(message);

} else if (credits > totalPrice) {
   
   credits -= totalPrice;
    
   alert(`Вы купили ${orderAmount} дроидов, на счету осталось ${credits} кредитов.`);
}