// console.log("Type Conversion and Type Coersion");
//NPrimitive:-
// String,Boolean,Number,BigInt,Symbol || Null,Undefined
//Non-Primitive
// Array, Function, Date, Map, Set, RegExp

//String
// var a = 10;
// a = a.toString();
// a = a.toString(2); //it'll convert into binary
// console.log(a.toString(), typeof a); //10 string

// a = String(a);
// console.log(a, typeof a); //10 string

// a = String([1, 2, 3]);
// console.log(a, typeof a); //1,2,3 string

// a = JSON.stringify([1, 2, 3]);
// console.log(a, typeof a); //[1,2,3] string

// a = String({ age: 20 });
// console.log(a, typeof a); //[object Object] string

// a = { age: 20 }.toString();
// console.log(a, typeof a); //[object Object] string

// a = { age: 20 }.toString();
// console.log(a, typeof a); //[object Object] string

// a = String(true);
// console.log(a, typeof a); //true string

//Number
// both Number and parseInt can be used to convert values to numbers, Number is more versatile and is not limited to parsing strings as parseInt is. Additionally, parseInt is specifically designed for parsing strings into integers, and it provides more control over the parsing process with the radix parameter.

//string to number
// var b = Number("20");
// console.log(b, typeof b); //20 'number'

// var b = Number("abc");
// console.log(b, typeof b); //NaN 'number'

// var b = Number("12a");
// console.log(b, typeof b); //NaN 'number'

//non-primitive to number
// var b = Number([3, 4, 5]);
// console.log(b, typeof b); //NaN 'number'

// var b = parseInt([3, 4, 5]); //return first element
// console.log(b, typeof b); //3 'number'

// var b = parseInt(["3", "4", "5"]);
// console.log(b, typeof b); //3 'number'

// var b = parseInt(["3abc", "4abc", "5abc"]);
// console.log(b, typeof b); //3 'number'

// var b = parseInt(["abc", "abc", "abc"]);
// console.log(b, typeof b); //NaN 'number'

//boolean to number
// var b = Number(true);
// console.log(b, typeof b); //1 'number'

// var b = parseInt(true);
// console.log(b, typeof b); //NaN 'number'

//Boolean

//number to boolean
// var c = Boolean(1);
// console.log(c, typeof c); //true 'boolean'

//string to boolean
// var c = Boolean("");
// console.log(c, typeof c); //false 'boolean'

// var c = Boolean("abc");
// console.log(c, typeof c); //true 'boolean'

// var c = Boolean(NaN);
// console.log(c, typeof c); //false 'boolean'

//non-primitive to boolean
// var c = Boolean([]);
// console.log(c, typeof c); //true 'boolean'

// var c = Boolean({});
// console.log(c, typeof c); //true 'boolean'

// var c = Boolean(false + 1); // implicit coercion will take place
// console.log(c, typeof c); //true 'boolean'

// var c = Boolean(false + 0);
// console.log(c, typeof c); //false 'boolean'

// var c = Boolean(false * 1);
// console.log(c, typeof c); //false 'boolean'

// var c = Boolean(false * 0);
// console.log(c, typeof c); //false 'boolean'

// var c = Boolean(true + 1);
// console.log(c, typeof c); //true 'boolean'

// var c = Boolean(true + 0);
// console.log(c, typeof c); //true 'boolean'

// var c = Boolean(true * 1);
// console.log(c, typeof c); //true 'boolean'

// var c = Boolean(true * 0);
// console.log(c, typeof c); //false 'boolean'

//-------------------------

//TYPE COERCION
// Type coercion in JavaScript refers to the automatic conversion of values from one data type to another.
//This can happen explicitly or implicitly.

// Loose Equality Coercion:
// console.log(42 == "42"); // Output: true
// console.log(42 === "42"); // Output: false

// console.log(true == 1); // Output: true
// console.log(false == 0); // Output: true
// console.log(true === 1); // Output: false
// console.log(false === 0); // Output: false

//1. String and Number Coercion:
// var a = "555";
// var b = 10;
// var c = a + b; //convert to string and add
// console.log(c, typeof c); //55510 string

//2. Boolean and Number Coercion
// var bool = true;
// var num = bool + 3; // Implicit conversion of bool to a number
// console.log(num, typeof num); // 4 'number'

//3. String and Number
// var str = "22";
// var num = str * 2; // Implicit conversion of str to a number
// var num = "2" * "2"; //4 // Implicit conversion of str to a number
// console.log(num, typeof num); // 44 'number'
/*
1 + "" + 22 + 33 //'12233'
22 + 33 + "" + 1 //'551'
22 + 33 + "" * 1 //55
22 + 33 + "" * 1 + true //56
22 + 33 + "" * 1 * true //55
*/
