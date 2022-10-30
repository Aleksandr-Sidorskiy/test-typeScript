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

let str: string;
str = "string";

const person: string = "Maxim"; // можно не опредилять тип данных

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

