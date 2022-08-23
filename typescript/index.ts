// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers

const button = document.querySelector('.button')
// tell Typescript the input is not a variable but an HTML element
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#secnd-input') as HTMLInputElement
// make element export becasue it will be changed in the function below
export const screen = document.querySelector('.screen')
 
// add types to parameters
function addNumbers(a: number,b: number) {
    //reassign html field to new string
     screen.innerHTML = (a + b).toString()
}
 
button.addEventListener('click', () => 
// fix strings into numbers
    addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))
