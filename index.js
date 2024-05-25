console.log("This is String tutorial")

let a = "Hardik";
console.log(a[3])

console.log(a.length)

let real_name = "Hardik";
let friend = "Akshat";
console.log("His name is " + real_name + " and his friend name is " + friend)
console.log(`His name is ${real_name} and his friend name is ${friend}`) // We have to use ` (backquotes) ` for this

let b = "Shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())

console.log(b.indexOf('v'))
console.log(b.slice(1, 4))
console.log(b.slice(1))

console.log(b.replace('Shi', 'Hii')) // If 2 occurrences are there then it will replace the first one ONLY
console.log(a.concat(b, " is a good person", "!!!"))

// All these will not change the original string
// It will return the new string with the changes made in it

console.log(a.startsWith('Hard'))
console.log(a.endsWith('dik'))
console.log(friend.endsWith('mat'))