"use strict";
const button = document.querySelector("#btn");
const input1 = document.querySelector("#num-1");
const input2 = document.querySelector("#num-2");
function add(a, b) {
  return a + b;
}
button === null || button === void 0
  ? void 0
  : button.addEventListener("click", function () {
      // console.log(add(+input1.value, +input2.value));
    });
let num;
num = 5;
let str1;
str1 = "string";
let arrString;
arrString = ["effgg", "max", "ilon"];
// console.log(arrString);
let arrNumber;
let arrAny;
let arrObject;
arrObject = [{ name: "Vill" }];
const obj = {};
const obj1 = {};
obj1.name = "Alex";
const data = {
  id: 1,
  price: 10.99,
  permission: ["read", "write"],
  details: {
    title: "New product",
    description: "This is awesome product!",
  },
};
const fruit = [];
function fruits(arr, value, action) {
  if (action === "add") {
    arr.push(value);
  } else {
    const index = arr.indexOf(value);
    arr.splice(index, 1);
  }
  return arr;
}
fruits(fruit, "banana", "add");
fruits(fruit, "apple", "add");
fruits(fruit, "lemon", "add");
fruits(fruit, "banana", "delete");
fruits(fruit, "orange", "add");
// console.log(fruit);
let age;
age = 50;
let callback = (a) => {
  return 100 + a;
};
// console.log(callback(1));
let some;
some = "Text";
let str;
if (typeof some === "string") {
  str = some;
}
let person;
person = ["Max", 21];
person = ["Alex", 22];
// console.log(person);
var Loading;
(function (Loading) {
  Loading[(Loading["LOADING"] = 0)] = "LOADING";
  Loading[(Loading["READY"] = 1)] = "READY";
})(Loading || (Loading = {}));
const page = {
  load: Loading.LOADING,
};
if (page.load === Loading.READY) {
  //   console.log("Страница загружена");
}
if (page.load === Loading.LOADING) {
  //   console.log("Страница загружается");
}
let union;
function calc(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}
// console.log(calc("12", "4"));
function customError() {
  throw new Error("Error");
}
//# sourceMappingURL=app.js.map

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  const sum = numbers.reduce((pre, number) => {
    return number * number + pre;
  }, 0);

  return sum;
}
squareSum([1, 2, 2]);
squareSum([1, 2]);
squareSum([]);

// Complete the solution so that it reverses the string passed into it.
function solution(str) {
  let text = str.split("").reverse().join("");
  return text;
}

solution("maria");
solution("cat");

/**
 * Write a function that takes an array of words and smashes
 * them together into a sentence and returns the sentence.
 * You can ignore any need to sanitize words or add punctuation,
 * but you should add spaces between each word.
 * Be careful, there shouldn't be a space at the beginning or the end of the sentence!
 */

function smash(words) {
  const worlds = words.join(" ");
  return worlds;
}

smash(["hello", "world", "this", "is", "great"]);
smash(["hello"]);

/**
 * Write a program that finds the summation of every number from 1 to num.
 * The number will always be a positive integer greater than 0.
 */

var summation = function (num) {
  // num.reduce((acum, sum) <= {

  // }, 0);
  console.log(num);
};
summation(1);
summation(2);
summation(8);
