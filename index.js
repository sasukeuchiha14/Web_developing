console.log("Hello I am a conditional tutorial")

let age=17;
let grace=2;

if ((age+grace)>=18) {
    console.log("You can drive a car")
}

else if ((age+grace)==17) {
    console.log("You can drive a car with a guardian")
}

else if ((age-grace)==60) {
    console.log("You are too old to Drive a car")
}

else {
    console.log("You are not allowed to drive a car"); // "; is optional in javascript but it is a good practice to use it to avoid any errors in the code."
}

age-=2;
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace) // / is used for division
console.log(age % grace) // % is used for modulus
console.log(age ** grace) // ** is used for exponentiation

console.log("3" == 3) // == is used for comparison
console.log("3" === 3) // === is used for strict comparison (comp with data type)
console.log("3" != 3) // != is used for not equal to
console.log("3" !== 3) // !== is used for not equal to with data type

// && is used for logical and operator
// || is used for logical or operator
// ! is used for logical not operator

// Ternary operator
console.log(age>=18 ? "You can drive a car" : "You are not allowed to drive a car")