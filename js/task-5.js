'use strict'

let countryToDeliver = prompt('Введите страну для доставки');
let price = 0;

if (countryToDeliver !== null) {
   countryToDeliver = countryToDeliver.toLowerCase();
}

switch (countryToDeliver) {

   case 'китай':
      price = 100;
      break;
   
   case 'чили':
      price = 250;
      break;
   
   case 'австралия':
      price = 170;
      break;
   
   case 'индия':
      price = 80;
      break;
   
   case 'ямайка':
      price = 120;

      
}

if (price > 0) {
   alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);

} else {
   console.log('В вашей стране доставка не доступна');
}
