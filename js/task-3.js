'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';

const message = prompt('Введите пароль');

let response = "Отменено пользователем";

if (message === null) {
   alert(response);

} else if (message === ADMIN_PASSWORD) {
   response = "Добро пожаловать!"
   alert(response);
   
} else {
   response = 'Доступ запрещен, неверный пароль!';
   alert(response);
} 