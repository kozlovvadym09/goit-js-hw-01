'use strict'

let countryToDeliver = prompt('Введите страну для доставки');

countryToDeliver = countryToDeliver.toLowerCase();
console.log(countryToDeliver);

const countryChina = 'китай';
const countryChilie = 'чили';
const countryAustralia = 'австралия';
const countryIndia = 'индия';
const countryJamaica = 'ямайка';


let price;

switch(countryToDeliver) {
   case countryChina:
      price = 100;
      countryToDeliver = 'китай';
      alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);
      break;
      
   case countryChilie:
      price = 250;
      countryToDeliver = 'чили';
      alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);
      break;

   case countryAustralia:
      price = 170;
      countryToDeliver = 'австралия';
      alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);
      break;

   case countryIndia:
      price = 80;
      countryToDeliver = 'индия';
      alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);
      break;

   case countryJamaica:
      price = 120;
      countryToDeliver = 'ямайка';
      alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);
      break;

      default:
         alert('В вашей стране доставка не доступна');
}