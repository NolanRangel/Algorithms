// 3 Aspects
// Edge case
// Base case
// Recursive statement -> return recursive statement

/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abcdefg";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

// var newStr = ""

// function reverseStr(str, i = 0) {

//   if (str == "") {
//     return newStr
//   }
//   if (str.length == i) {
//     return
//   }
//   reverseStr(str, i + 1);
//   return newStr += str[i];
// }

// console.log(reverseStr(str1));
// console.log(reverseStr(str2));

function reverseStr(str) {
  if (str.length == 0) {
    return ""
  }
  return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1))

}
  
console.log(reverseStr(str1));
console.log(reverseStr(str2));


// ******************************************************

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;


function binarySearch(sortedNums, searchNum) { }