// console.log("Slice and Splice");

//Slice
// var a = [3, 2, 5, 12, 8, 9, 1];

// var section = a.slice(); //doesn't modifies the orignal array, returns shallow copy

// console.log(section); //[3, 2, 5, 12, 8, 9, 1]
// console.log(a.slice(2)); //[5, 12, 8, 9, 1] it'll take 2 as starting index (inclusive)
// console.log(a.slice(2, 5)); //[5, 12, 8] it'll take 2 as starting index & 5 as last index (exclusive)
// console.log(a.slice(2, 20)); //[5, 12, 8, 9, 1]
// console.log(a.slice(20 , 5)); //[]
// console.log(a.slice(-3)); //[8, 9, 1] //returns last 3 elements
// console.log(a.slice(2, -2)); // [5, 12, 8] //starts from index 2 and skips last 2 elements

//Splice
//modifies the orignal array

// var a = [3, 2, 5, 12, 8, 9, 1];
// console.log(a.slice(1, 4)); // [2, 5, 12] starting index 1 ending index 3
// console.log(a.splice(1, 4)); // [2, 5, 12, 8] it will take 4 elements starting from index 1
// console.log(a); // [3, 9, 1]

// var a = [3, 2, 5, 12, 8, 9, 1];
// console.log(a.splice(-1)); // [1] will return last 1 elements
// // console.log(a); // [3, 2, 5, 12, 8, 9]  //a gets modified

// var a = [3, 2, 5, 12, 8, 9, 1];
// console.log(a.splice(-3)); // [8, 9, 1]
// console.log(a); // [3, 2, 5, 12]

// var a = [3, 2, 5, 12, 8, 9, 1];
// console.log(a.splice(20, 4)); // []
// console.log(a); // [3, 2, 5, 12, 8, 9, 1]

// var a = [3, 2, 5, 12, 8, 9, 1];
// console.log(a.splice(2, 0, "mango", "orange")); //starting from index 2 it removes 0 elements and add  "mango", "orange"
// console.log(a); // [3, 2, 'mango', 'orange', 5, 12, 8, 9, 1]

// var a = [3, 2, 5, 12, 8, 9, 1];
// console.log(a.splice(2, 3, "mango", "orange")); // [5, 12, 8] //starting from index 2 it removes 3 elements and add  "mango", "orange"
// console.log(a); // [3, 2, 'mango', 'orange', 9, 1]
