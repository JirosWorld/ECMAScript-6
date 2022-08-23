"use strict";
// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers
Object.defineProperty(exports, "__esModule", { value: true });
exports.screen = void 0;
const button = document.querySelector('.button');
// tell Typescript the input is not a variable but an HTML element
const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#secnd-input');
// make element export becasue it will be changed in the function below
exports.screen = document.querySelector('.screen');
// add types to parameters
function addNumbers(a, b) {
    //reassign html field to new string
    exports.screen.innerHTML = (a + b).toString();
}
button.addEventListener('click', () => 
// fix strings into numbers
addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)));
//# sourceMappingURL=index.js.map