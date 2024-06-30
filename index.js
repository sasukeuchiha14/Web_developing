let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr, typeof arr);    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 'object'
console.log(arr.length);         // 10

// Array is mutable unlike strings.
// => We can change the values of an array.

arr[0] = 100;
arr[1] = "Hello";
arr[2] = true;
arr[3] = { name: "John" };
arr[4] = [1, 2, 3, 4];

console.log(arr);
console.log(arr[4][2]);          // 3

console.log(arr.toString());     // 100,Hello,true,[object Object],1,2,3,4,8,9,10
console.log(String(arr));        // 100,Hello,true,[object Object],1,2,3,4,8,9,10
console.log(`${arr}`);           // 100,Hello,true,[object Object],1,2,3,4,8,9,10

console.log(arr.join(" - "));    // 100 - Hello - true - [object Object] - 1 - 2 - 3 - 4 - 8 - 9 - 10

arr.push(200);                   // Adds 200 at the end of the array.
console.log(arr);

arr.pop();                       // Removes the last element from the array.
console.log(arr);

arr.unshift(300);                // Adds 300 at the beginning of the array.
console.log(arr);

arr.shift();                     // Removes the first element from the array.
console.log(arr);

arr.splice(2, 3);                // Removes 3 elements starting from index 2.
console.log(arr);

arr.splice(2, 0, 3, 4, 5);       // Adds 3, 4, 5 starting from index 2. (0 means no deletion)
console.log(arr);

arr.splice(2, 3, 6, 7, 8);       // Replaces 3 elements starting from index 2 with 6, 7, 8.
console.log(arr);

arr.reverse();                   // Reverses the array.
console.log(arr);

arr.sort();                      // Sorts the array in ascending order.
arr.sort((a, b) => a - b);       // Sorts the array in ascending order.
console.log(arr);

arr.sort((a, b) => b - a);       // Sorts the array in descending order.
console.log(arr);

delete arr[2];                   // Deletes the element at index 2.
console.log(arr);

arr = arr.filter((el) => el !== undefined);  // Removes undefined elements from the array.
console.log(arr);

arr = arr.map((el) => el * 2);   // Doubles each element of the array.
console.log(arr);

arr.forEach((el, index) => {
    console.log(index, el)
});                              // Iterates over each element of the array.

const add = (a, b) => a + b;
console.log(arr.reduce(add));    // Sums up all the elements of the array.

console.log(Array.from("Hello"));// Converts a string into an array.
console.log(Array.from({ length: 5 }));       // Creates an array of length 5.
