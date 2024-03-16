//Two sum -
//Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//without sorting
// const twoSum = (arr, target) => {
//   let obj = {};
//   const length = arr.length;
//   obj[arr[0]] = 0;
//   for (let i = 0; i < length; i++) {
//     const diff = target - arr[i];
//     if (diff in obj) {
//       return [obj[diff], i];
//     } else {
//       obj = { ...obj, [arr[i]]: i };
//     }
//   }
//   return false;
// };
// console.log(twoSum([2, 11, 15, 7], 9));

//------

//with sorting
// const twoSum = (arr, target) => {
//   const sortedArr = arr.sort((a, b) => a - b);
//   let i = 0,
//     j = arr.length - 1;
//   while (i < j) {
//     if (sortedArr[i] + sortedArr[j] > target) j--;
//     else if (sortedArr[i] + sortedArr[j] < target) i++;
//     else return [i, j];
//   }
//   return false;
// };
// console.log(twoSum([1, 0, 2, 11, 15, 7], 9));

//-------------------------------------

//Three sum, such that the sum of triplets is 0.

// //with sorting
// var threeSum = function (nums) {
//   let res = [];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     let l = i + 1;
//     let r = nums.length - 1;
//     while (l < r) {
//       let sum = nums[i] + nums[l] + nums[r]; //here nums[i] is a priority element
//       if (sum === 0) {
//         res.push([nums[i], nums[l], nums[r]]);
//         while (nums[l + 1] === nums[l]) l++; //here we're checking if the current element = next then skip
//         while (nums[r - 1] === nums[r]) r--; //here we're checking if the current element = next then skip
//         l++;
//         r--;
//       } else if (sum < 0) l++;
//       else r--;
//     }
//     while (nums[i + 1] === nums[i]) i++; //here we're checking if the current priority element = next then skip
//   }
//   return res;
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//-------------------------------------

//Maximum Element in array without sorting -
// function getMax(arr) {
//   let max = -Infinity;
//   arr.forEach((element) => {
//     if (element > max) max = element;
//   });
//   return max;
// }
// console.log(getMax([1, 0, 2, 11, 15, 7]));

//-------------------------------------

//Second Maximum Element in an Array-
// function getSecondMax(arr) {
//   let max = -Infinity;
//   let secondMax = max;
//   arr.forEach((element) => {
//     if (element > max) {
//       secondMax = max;
//       max = element;
//     } else if (element > secondMax && element != max) {
//       secondMax = element;
//     }
//   });
//   return secondMax;
// }
// console.log(getSecondMax([1, 0, 2, 11, 20, 150, 70, 50]));

//-------------------------------------

//Given an array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// function moveZeros(arr) {
//   let zi = 0;
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     if (arr[i] !== 0) {
//       [arr[i], arr[zi]] = [arr[zi], arr[i]]; //swap
//       zi++;
//     }
//   }
//   return arr;
// }
// console.log(moveZeros([1, 0, 2, 11, 0, 0, 70, 0, 12]));

//-------------------------------------

//Binary search-

// function findElement(arr, n) {
//   let start = 0,
//     end = arr.length - 1;
//   const sortedArr = arr.sort((a, b) => a - b);
//   return applyBinarySearch(sortedArr, n, start, end);
// }
// function applyBinarySearch(arr, n, start, end) {
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (n > arr[mid]) {
//       start = mid + 1;
//     } else if (n < arr[mid]) {
//       end = mid - 1;
//     } else {
//       return arr[mid];
//     }
//   }
//   return -1;
// }
// console.log(findElement([1, 0, 2, 11, 0, 0, 70, 0, 12, 10], 10));

//--------------------------------------

// longest substring without repetition of characters using a sliding window approach

// function getLongestCommonSubstringWithoutRepetition(str) {
//   let maxLength = 0;
//   let start = 0;
//   let obj = {};
//   for (let index = 0; index < str.length; index++) {
//     const item = str[index];
//     if (item in obj && obj[item] >= start) {
//       start = obj[item] + 1;
//     }
//     obj[item] = index;
//     maxLength = Math.max(maxLength, index - start + 1);
//   }
//   return maxLength;
// }
// console.log(getLongestCommonSubstringWithoutRepetition("abcabcbb"));

// function getLongestCommonSubstringWithoutRepetition(str) {
//   let maxLength = 0;
//   let start = 0;
//   let substrings = {};
//   let currentSubstring = "";

//   for (let index = 0; index < str.length; index++) {
//     const item = str[index];
//     if (currentSubstring.includes(item)) {
//       start = index - currentSubstring.length + currentSubstring.indexOf(item) + 1;
//       currentSubstring = str.substring(start, index + 1);
//       // console.log(1, currentSubstring)
//     } else {
//       currentSubstring += item;
//       // console.log(2, currentSubstring)
//       maxLength = Math.max(maxLength, currentSubstring.length);
//     }

//     substrings[currentSubstring] = currentSubstring.length;
//   }
//   console.log(substrings);
//   return maxLength;
// }
// console.log(getLongestCommonSubstringWithoutRepetition("pwwkew"));

//-------

// const getLongestCommonSubstringWithoutRepetition = (str) => {
//   let l = 0;
//   let r = 0;
//   let max = 0;
//   let set = new Set();
//   while (r < str.length) {
//     const currentChar = str[r];
//     if (!set.has(currentChar)) {
//       set.add(currentChar);
//       max = Math.max(max, r - l + 1);
//       r++;
//     } else {
//       while (str[l] !== currentChar) {
//         set.delete(str[l]);
//         l++;
//       }
//       set.delete(currentChar);
//       l++;
//     }
//   }
//   return max;
// };
// console.log(getLongestCommonSubstringWithoutRepetition("abcacbbb"));

//----------------------------------

//Given a binary string where we need to swap '0s' with '01' and '1s' with '10'
//till 'k'-iterations and then return the literal at the index 'i'.

// const getValue = (str, k, index) => {
//   let res = str;
//   if (res.length === 0) return -1;
//   let i = 0;
//   while (i < k) {
//     let temp = "";
//     for (let j = 0; j < res.length; j++) {
//       if (res[j] == "0") {
//         temp = temp + "01";
//       } else if (res[j] == "1") {
//         temp = temp + "10";
//       }
//     }
//     res = temp;
//     i++;
//   }
//   return res[index];
// };

// console.log(getValue("01", 2, 2));

//----------------------------------

// var carPooling = function (trips, capacity) {
//   let arr = new Array(1000).fill(0);
//   let result = 0;
//   for (let [p, f, t] of trips) {
//     arr[f] += p;
//     arr[t] -= p;
//   }
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     result = result + arr[i];
//     if (result > capacity) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(
//   carPooling(
//     [
//       [2, 1, 5],
//       [3, 3, 7],
//     ],
//     5
//   )
// );

//----------------------------------

//Linked List

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   shift(data) {
//     this.head = new Node(data, this.head); //second parameter is this.head since we are inserting in start
//   }
//   reverse() {
//     let prev = null,
//       next = null;
//     let curr = this.head;
//     while (curr !== null) {
//       next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }
//   insertAfterK(value, target) {
//     let curr = this.head;
//     const newNode = new Node(value);
//     while (curr.data !== target) {
//       curr = curr.next;
//     }
//     newNode.next = curr.next;
//     curr.next = newNode;
//   }
//   remove(value) {
//     let curr = this.head;
//     let prev = null;
//     while (curr !== null && curr.data !== value) {
//       prev = curr;
//       curr = curr.next;
//     }
//     if (curr === null) {
//       console.log("Eelement not found");
//       return;
//     } else {
//       prev.next = curr.next;
//       curr.next = null;
//     }
//   }
//   printList() {
//     let current = this.head;
//     while (current !== null) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const linkedList = new LinkedList();
// linkedList.shift(4);
// linkedList.shift(3);
// linkedList.shift(2);
// linkedList.shift(1);

// console.log("Original linked list:");
// linkedList.printList();

// linkedList.reverse();
// console.log("Reversed linked list:");
// linkedList.printList();

// console.log("After inserting after k:");
// linkedList.insertAfterK(5, 3);
// linkedList.printList();

// console.log("After deleting k:");
// linkedList.remove(3);
// linkedList.printList();

//----------------------------------
//Rotate Linked List To right by K places
// var rotateRight = function (head, k) {
//     if (head == null) return null;
//     let tail = head;
//     let length = 1;
//     while (tail.next) {
//         tail = tail.next;
//         length++;
//     }
//     tail.next = head;
//     k = length - k % length
//     for(let i=0; i<k; i++){
//         tail = tail.next;
//         head = tail.next;
//     }
//     tail.next = null;
//     return head;
// };

//----------------------------------

/**
 * Retain the space index-
 * "welcome to innoventes"
 * "setnevo nn iotemoclew"
 */

// function swap(str) {
//   let res = str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .reverse()
//     .join("")
//     .split("");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       res.splice(i, 0, " ");
//     }
//   }
//   console.log(res.join(""));
// }
// swap("welcome to innoventes");

//----------------------------------
