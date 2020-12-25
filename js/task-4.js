'use strict'


let credits = 23580;

const pricePerDroid = 3000;

let orderAmount = prompt('Укажите количество дроидов для покупки');

let totalPrice;


if (orderAmount === null) {
   console.log('Отменено пользователем!');
   
} else {
   totalPrice = pricePerDroid * orderAmount;

   if (credits < totalPrice) {
      console.log('Недостаточно средств на счету!');

   } else {
      credits -= totalPrice;
    
      alert(`Вы купили ${orderAmount} дроидов, на счету осталось ${credits} кредитов.`);
   }
}