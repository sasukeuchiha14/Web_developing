for (let i=0; i<10; i++) {
  console.log(i)
}

let obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}


// forin loop for objects
for (const key in obj) {
    console.log(key, obj[key])
}

// forof loop for arrays
for (const c of 'Hello') {
    console.log(c)
}

let i=5;
while (i<10) {
    console.log(i)
    i++
}

do {
    console.log(i)
    i++
} while (i<20)