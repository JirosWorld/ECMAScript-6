// JavaScript Types....
// Primitives:
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint" = beyond safe numbers
// Symbol : typeof instance === "symbol" = 'atoms'
// undefined : typeof instance === "undefined" = error outcome of code


// Structural Types:
// Object : typeof instance === "object"
// Function : typeof instance === "function"

// Structural Root Primitive:
// null : typeof instance === "object" = an emptiness defined by the programmer

// Using typeof

const button = document.querySelector(".button");
const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#second-input');
const screen = document.querySelector('.screen');

// this gives a problem: it turns the inputs into strings
// function addNumbers(a, b) {
//     console.log(a + b);
//     screen.innerHTML = a + b;
// }

// easy solution: check logic/types after data is input
function addNumbers(a,b) {
    if (typeof a === 'number' && typeof b === 'number') {
        screen.innerHTML = a + b
    } else screen.innerHTML = parseInt(a) + parseInt(b)
}

// note: in Typescriot we put the logic INSIDE the parameters, BEFORE input

button.addEventListener('click', () => addNumbers(firstInput.value, secondInput.value));
