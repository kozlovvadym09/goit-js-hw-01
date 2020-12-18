'use strict'

const total = 120;

const ordered = 130;

const checked = `(Товара на складе ${total} единиц , Заказано товара ${ordered} единиц)`;

console.log(checked);

const topUpProducts = `"На складе недостаточно товара!"`;

const nextProcedure = `"Заказ оформлен, с вами свяжется менеджер"`;

if (total < ordered) {
   console.log(topUpProducts);

} else if (total > ordered) {
   
   console.log(nextProcedure);
}