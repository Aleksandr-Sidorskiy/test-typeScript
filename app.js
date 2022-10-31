// первый пример 
var button = document.querySelector('#btn');
var input1 = document.querySelector('#num-1');
var input2 = document.querySelector('#num-2');
function add(a, b) {
    return a + b;
}
;
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// простые типы данных 
var num;
num = 5;
var str1;
str1 = "string";
// const person: string = "Maxim"; // можно не опредилять тип данных
// сложные типы данных
// массив строк 
var arrString;
arrString = ["effgg", "max", "ilon"];
console.log(arrString);
// массив чисел
var arrNumber;
// для всех типов даных
var arrAny;
// для массивов обьектов
var arrObject;
arrObject = [{ name: "Vill" }];
// тип object
var obj = {}; //const obj: {} = {};
// Для не обязательных полей есть оператор ?
var obj1 = {};
obj1.name = 'Alex';
// Пример заполнения обьекта
var data = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: 'New product',
        description: 'This is awesome product!'
    }
};
// пример Literal Type
var fruit = [];
function fruits(arr, value, action) {
    if (action === 'add') {
        arr.push(value);
    }
    else {
        var index = arr.indexOf(value);
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
var age;
age = 50;
var callback = function (a) {
    return 100 + a;
};
;
console.log(callback(1));
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
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
var page = {
    load: Loading.LOADING
};
if (page.load === Loading.READY) {
    console.log('Страница загружена');
}
if (page.load === Loading.LOADING) {
    console.log('Страница загружается');
}
function showMessage(message) {
    console.log(message);
}
var union;
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
