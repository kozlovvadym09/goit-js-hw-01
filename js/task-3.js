'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';

let massage; 

const response = prompt('Введите пароль');

if (response === null) {
   massage = "Отменено пользователем";

} else if (response === ADMIN_PASSWORD) {
   massage = "Добро пожаловать!";
   
} else {
   massage = 'Доступ запрещен, неверный пароль!';
} 
alert(massage);