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