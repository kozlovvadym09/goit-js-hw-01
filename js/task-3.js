'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';

let massage = prompt('Введите пароль');

console.log(massage);

if(massage === null) {
   massage = 'Отменено пользователем!'; 

} else if (massage === ADMIN_PASSWORD) {
   massage = 'Добро пожаловать!';

} else {
   massage = 'Доступ запрещен, неверный пароль!';
} 
alert(massage);