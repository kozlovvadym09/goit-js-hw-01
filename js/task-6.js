'use strict'

let input;
let total = 0;

while(true) {
   input = prompt('Введите число');
   if (input === null) {
      alert(`Общая сумма чисел равна ${total}`);
      break;
   }
   const incorrectInput = isNaN(input);

   if(incorrectInput) {
   alert('Было введено не число, попробуйте еще раз');
   continue;
   }
   total += Number(input);
}