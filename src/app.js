"use strict";
// первый пример 
const button = document.querySelector('#btn');
const input1 = document.querySelector('#num-1');
const input2 = document.querySelector('#num-2');
function add(a, b) {
    return a + b;
}
;
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// простые типы данных 
let num;
num = 5;
let str1;
str1 = "string";
// const person: string = "Maxim"; // можно не опредилять тип данных
// сложные типы данных
// массив строк 
let arrString;
arrString = ["effgg", "max", "ilon"];
console.log(arrString);
// массив чисел
let arrNumber;
// для всех типов даных
let arrAny;
// для массивов обьектов
let arrObject;
arrObject = [{ name: "Vill" }];
// тип object
const obj = {}; //const obj: {} = {};
// Для не обязательных полей есть оператор ?
const obj1 = {};
obj1.name = 'Alex';
// Пример заполнения обьекта
const data = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: 'New product',
        description: 'This is awesome product!'
    }
};
// пример Literal Type
const fruit = [];
function fruits(arr, value, action) {
    if (action === 'add') {
        arr.push(value);
    }
    else {
        const index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
}
fruits(fruit, 'banana', 'add');
fruits(fruit, 'apple', 'add');
fruits(fruit, 'lemon', 'add');
fruits(fruit, 'banana', 'delete');
fruits(fruit, 'orange', 'add');
console.log(fruit);
let age;
age = 50;
let callback = (a) => {
    return 100 + a;
};
;
console.log(callback(1));
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
let person;
person = ['Max', 21];
person = ['Alex', 22];
console.log(person);
/**
 *
 * Опишите enum условие следующее, он должен отображать
 * статус загрузки. Загружается (LOADING) и загружена (READY).
 
 Сделайте переменную, которая может принимать
 или строку или число.
 
 Сделайте переменную, которая может принимать
 только одно значение из двух 'enable' или 'disable'
 
 Укажите типы для следующих функций
 */
var Loading;
(function (Loading) {
    Loading[Loading["LOADING"] = 0] = "LOADING";
    Loading[Loading["READY"] = 1] = "READY";
})(Loading || (Loading = {}));
;
const page = {
    load: Loading.LOADING
};
if (page.load === Loading.READY) {
    console.log('Страница загружена');
}
if (page.load === Loading.LOADING) {
    console.log('Страница загружается');
}
let union;
function calc(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
console.log(calc("12", "4"));
function customError() {
    throw new Error('Error');
}
