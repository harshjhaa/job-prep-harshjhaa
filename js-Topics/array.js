// console.log("Array");
// var a = [1, 2, 3];
// a[5] = 10;
// console.log(a); //[1, 2, 3, empty × 2, 10]
// console.log(a[3]);  //undefined
// console.log(a[4]);  //undefined
// console.log(a.length);  //6
// a.length = 10
// console.log(a);  //[1, 2, 3, empty × 2, 10, empty × 4]

// var a = [1, 2, 3];
// a.length = 2
// console.log(a);  //[1, 2]

//-----------------------------

//all array methods- map, filter, forEach, reduce, find, some, every are HOFs

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 10);
// console.log(found); //returns the first satisfying element 12

// const foundIndex = array1.findIndex((element) => element > 10);
// console.log(foundIndex);

// const even = array1.some((element) => element % 2 == 0);
// console.log(even); //true

// const array1 = [5, 12, 8, 130, 44];
// const even = array1.every((element) => element % 2 == 0);
// console.log(even); //false

// console.log(array1.indexOf(12));
// console.log(array1.includes(12));

//-----------------------------

//MAP
// console.log("MAP");
// const arr = [1, 2, 3, 4, 5];
// function double(n) {
//   return n * 2;
// }
// function toBinary(n) {
//   return n.toString(2);
// }
// const result = arr.map(double);
// const result = arr.map(function (item) {
//   return item * 2;
// });
// const result = arr.map(function double(item) {
//   return item * 2;
// });
// const result = arr.map((item) => {
//   return item * 2;
// });
// const result = arr.map(toBinary);
// console.log(result);

//-----------------------------

// REDUCE
//if initial value is not present, then initial value is the 0th index of array
// console.log("REDUCE");
// const arr = [1, 2, 3, 4, 5, 20, 10];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

// const sum = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(sum);

// const findMax = arr.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, -99999999999999);
// console.log(findMax);

// const users = [
//   { fName: "Harsh", lName: "Jha", age: 25 },
//   { fName: "Narendra", lName: "Modi", age: 70 },
//   { fName: "Arvind", lName: "Kejriwal", age: 45 },
//   { fName: "Rahul", lName: "Gandhi", age: 56 },
//   { fName: "Jha", lName: "Harsh", age: 25 },
// ];

// const userName = users.map((item) => item.fName + " " + item.lName);
// console.log(userName);

// const ageFrequencyMap = users.reduce((acc, curr) => {
//   acc[curr.age] = (acc[curr.age] || 0) + 1;
//   return acc;
// }, {});
// console.log(ageFrequencyMap);

// const userNameLessThanAge30Arr = users.filter((user) => {
//   if (user.age < 30) {
//     return user.fName; //it will be treated as true, thus whole user object will be returned
//   }
// });

// const userNameLessThanAge30Arr = users
//   .filter((user) => user.age < 30)
//   .map((user) => user.fName);
// console.log(userNameLessThanAge30Arr);
