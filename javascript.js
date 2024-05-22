console.log('Hello, World!');

var a=5;
var b=6;
var c="Hardik";
var _d="Garg";
var $e="Garg";
// var 4f="Garg"; ERROR

console.log(a+b+6);
console.log(typeof a, typeof b, typeof c);

const a1=5;
// a1=6; ERROR becz a1 is constant

// We should use Let instead of var becz var is global scope and let is block scope
let x=5;
{
    let x=10;
    console.log(x);
}
console.log(x);

// Data Types
// Primitive Data Types
// Reference Data Types
// Special Data Types
// User Defined Data Types
// Null Data Types
// Undefined Data Types
// Symbol Data Types
// BigInt Data Types
// Object Data Types
// Function Data Types
// Array Data Types
// Date Data Types
// RegExp Data Types
// Error Data Types
// Boolean Data Types
// Number Data Types
// String Data Types

let h = {
    name: "Hardik",
    age: 20,
}
console.log(h);
h.salary=10000;
h.isHandsome=true;
console.log(h);