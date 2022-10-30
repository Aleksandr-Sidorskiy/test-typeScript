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
var str;
str = "string";
var person = "Maxim"; // можно не опредилять тип данных
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
