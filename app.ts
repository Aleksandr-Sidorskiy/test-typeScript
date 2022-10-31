// первый пример 
const button = document.querySelector('#btn');
const input1 = document.querySelector('#num-1')! as HTMLInputElement;
const input2 = document.querySelector('#num-2')! as HTMLInputElement;


function add(a:number, b:number){
    return a + b;
};

button?.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
   
});
// простые типы данных 
let num: number;
num = 5;

let str1: string;
str1 = "string";

// const person: string = "Maxim"; // можно не опредилять тип данных

// сложные типы данных

// массив строк 
let arrString: string[];
arrString = ["effgg", "max", "ilon"];
console.log(arrString);


// массив чисел
let arrNumber: number[];

// для всех типов даных
let arrAny: any[];
// для массивов обьектов
let arrObject: { name: string }[];
arrObject = [{ name: "Vill" }]

// тип object
const obj: object = {};//const obj: {} = {};

// Для не обязательных полей есть оператор ?
const obj1: { name?: string } = {};

obj1.name = 'Alex';

// Пример заполнения обьекта
const data: {
  id: number;
  price: number;
  permission: string[],
  details: {
    title: string;
    description?: string;
  }
} = {
  id: 1,
  price: 10.99,
  permission: ['read', 'write'],
  details: {
    title: 'New product',
    description: 'This is awesome product!'
  }
}
// пример Literal Type
const fruit:string[] = [];

function fruits(arr, value:string, action:'add'|'delete') {
    if (action === 'add') {
        arr.push(value);
    } else {
        const index = arr.indexOf(value);
        arr.splice(index, 1)
    }
    return arr;
}

fruits(fruit, 'banana', 'add');
fruits(fruit, 'apple', 'add');
fruits(fruit, 'lemon', 'add');
fruits(fruit, 'banana', 'delete');
fruits(fruit, 'orange', 'add')
console.log(fruit);

let age: number;
age = 50;
let callback = (a: number) => {
    return 100 + a
};

;
console.log(callback(1));

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
    str = some;
}

let person:[string, number]

person = ['Max', 21];
person=['Alex', 22]
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
 
enum Loading { LOADING, READY };
 
 const page = {
     load: Loading.LOADING
 }
 if (page.load === Loading.READY) {
  console.log('Страница загружена');
}
 if (page.load === Loading.LOADING) {
     console.log('Страница загружается');
 }
function showMessage(message) {
  console.log(message);
}
 
let union: string | number;

 function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error('Error');
}
