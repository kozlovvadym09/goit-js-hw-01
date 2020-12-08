'use strict'
let credits = (23580);

const pricePerDroid = (3000);

let totalPrice = (21000);


let massage = prompt('Укажите количество дроидов для покупки');
console.log(massage);
 

if(massage === null) {
   alert('Отменено пользователем!');

} else if (credits < totalPrice) {
   console.log('Недостаточно средств на счету!');

} else if (credits > totalPrice) {
   credits -= totalPrice;
   console.log(`'Вы купили ${massage} дроидов, на счету осталось ${credits} кредитов.'`);
}
 