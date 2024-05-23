console.log("\nFUNCTIONS\n")

// Function Declaration
function greet(name) {
    console.log("Hello " + name + "!")
}

greet("Hardik")
greet("Ram")


// Function Expression
const greet2 = function(name) {
    console.log("Hello " + name + "!")
}

greet2("Hardik")
greet2("Ram")


// Arrow Function
const greet3 = (name) => {
    console.log("Hello " + name + "!")
}

greet3("Hardik")
greet3("Ram")


// Arrow Function with single argument
const greet4 = name => {
    console.log("Hello " + name + "!")
}
// If there is only one argument, then we can remove the parenthesis as we removed in line 20th to 28th
greet4("Hardik")
greet4("Ram")


// Functions with return
const sum = (a, b) => {
    return a + b
}

result = sum(2, 3)
console.log("\nSum: " + result)

const sum2 = (a, b, c=5) => a + b + c
// If we don't pass the value of c, then it will take the default value of c which is 5
console.log("\nSum: " + sum2(2, 3))
console.log("Sum: " + sum2(2, 3, 4))