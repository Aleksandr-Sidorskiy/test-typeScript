const button = document.querySelector('#btn');
const input1 = document.querySelector('#num-1')! as HTMLInputElement;
const input2 = document.querySelector('#num-2')! as HTMLInputElement;


function add(a:number, b:number){
    return a + b;
};

button?.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
   
});
