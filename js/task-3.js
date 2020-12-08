'use strict'

const ADMIN_PASSWORD = ('jqueryismyjam');

let massage = prompt('Введите пароль');

console.log(massage);

if(massage === null) {
   alert('Отменено пользователем!'); 

} else if (massage === ADMIN_PASSWORD) {
   alert('Добро пожаловать!');

} else {
   alert('Доступ запрещен, неверный пароль!');
} 