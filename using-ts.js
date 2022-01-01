"use strict";
// const button = document.getElementById("button")! as HTMLButtonElement;
const button = document.querySelector("button");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
