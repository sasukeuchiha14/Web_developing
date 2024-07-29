console.log('Hello from promice.js');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.69) {
        reject('Sorry, but random number was not supporting you. (1)');
    } 
    else {
        setTimeout(() => {
            resolve('Success 1');
        }, 2000);
    }
});

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.69) {
        reject('Sorry, but random number was not supporting you. (2)');
    } 
    else {
        setTimeout(() => {
            resolve('Success 2');
        }, 2000);
    }
});

// prom1.then((message) => {
//     console.log('This is in the then block: ', message);
// }).catch((err) => {
//     console.log('This is in the catch block: ', err);
// });


let p3 = Promise.all([prom1, prom2]); // This will wait for all promises to be resolved or rejected and then only it will execute the then or catch block.

p3.then((messages) => {
    console.log('This is in the then block: ', messages);
}).catch((err) => {
    console.log('This is in the catch block: ', err);
}); // Only one error will be shown if any one promise is rejected .


p4 = Promise.allSettled([prom1, prom2]); // This will wait for all promises to be resolved or rejected and then only it will execute the then or catch block.

p4.then((messages) => {
    console.log('This is in the then block: ', messages);
}).catch((err) => {
    console.log('This is in the catch block: ', err);
});  // Will give status of all promises whether they are resolved or rejected.


p5 = Promise.race([prom1, prom2]); // This will wait for the first promise to be resolved or rejected and then only it will execute the then or catch block.

p5.then((message) => {
    console.log('This is in the then block: ', message);
}).catch((err) => {
    console.log('This is in the catch block: ', err);
}); // Will give the result of the first promise which is resolved or rejected.


p6 = Promise.any([prom1, prom2]); // This will wait for the first promise to be resolved and then only it will execute the then block. If all promises are rejected then it will execute the catch block.

p6.then((message) => {
    console.log('This is in the then block: ', message);
}).catch((err) => {
    console.log('This is in the catch block: ', err);
}); // Will give the result of the first promise which is resolved or rejected.


p7 = Promise.resolve('This is a resolved promise');
p7.then((message) => {
    console.log('This is in the then block: ', message);
}).catch((err) => {
    console.log('This is in the catch block: ', err);
}); // Will give the result of the resolved promise.
