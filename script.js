//Задание 1 (вариант 1)

let password = 'пароль';
let userPassword = String(prompt('Введите пароль'));

if (password === userPassword) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

//Задание 1 (вариант 2)

let password = 'пароль';
let userPassword = String(prompt('Введите пароль'));

let result = password === userPassword ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');

//Задание 2 (вариант 1)

let c = Number(prompt('Введите любое число'));

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 2 (вариант 2)

let c = Number(prompt('Введите любое число'));

let result = (c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');

//Задание 3

let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4

let a = Number('2');
let b = Number('3');
alert(a + b);

//Задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1: case 2: case 12:
        console.log(`${monthNumber} месяц относится к зиме`);
        break;
    case 3: case 4: case 5:
        console.log(`${monthNumber} месяц относится к весне`);
        break;
    case 6: case 7: case 8:
        console.log(`${monthNumber} месяц относится к лету`);
        break;
    case 9: case 10: case 11:
        console.log(`${monthNumber} месяц относится к осени`);
        break;
    default: console.log(`Месяца с номером не существует`);
        break;
}

//Задание 7

let evenCheck = prompt('Пожалуйста, введите любое число');

if (isFinite(evenCheck)) {
    if (evenCheck % 2 == 0) {
        alert(`${evenCheck} - четное число`);
    } else {
        alert(`${evenCheck} - нечетное число`);
    }
} else {
    alert(`${evenCheck} не число`);
}

//Задание 8

let clientOS = 0;

(clientOS === 0) ? console.log('Установите версию приложения для iOS по ссылке') : console.log('Установите версию приложения для Android по ссылке');

//Задание 9

let clientOS = 0;
let clientDeviceYear = 2015;

if (clientOS === 0 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDeviceYear <2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
}
else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
}
else {
    console.log('Установите версию приложения для Android по ссылке');
}