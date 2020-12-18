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
      break;
      
   case countryChilie:
      price = 250;
      countryToDeliver = 'чили';
      break;

   case countryAustralia:
      price = 170;
      countryToDeliver = 'австралия';
      break;

   case countryIndia:
      price = 80;
      countryToDeliver = 'индия';
      break;

   case countryJamaica:
      price = 120;
      countryToDeliver = 'ямайка';
      break;

      default:
         alert('В вашей стране доставка не доступна');
}

alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);