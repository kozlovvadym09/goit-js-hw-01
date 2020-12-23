'use strict'

let countryToDeliver = prompt('Введите страну для доставки');
let price = 0;

switch (countryToDeliver = countryToDeliver.toLowerCase()) {

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
      break;
   
      default:

      alert('В вашей стране доставка не доступна');
}

if (price !== undefined) {
   alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);

} else (countryToDeliver = null); {
   console.log(countryToDeliver);
}
