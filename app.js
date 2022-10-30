var button = document.querySelector('#btn');
var input1 = document.querySelector('#num-1');
var input2 = document.querySelector('#num-2');
console.log(button);
function add(a, b) {
    return a + b;
}
;
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
