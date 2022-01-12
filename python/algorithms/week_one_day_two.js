
/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */

/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

// psuedo code
// create variable for a new string
// create loop to iterate through array
// create conditional to inspect for single char, return number as string
// create conditional to inspect for no char, return string
// create conditional to add seperator in front of the char and push to new string

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

function join(arr, separator) {
    newString = ""

    if(arr.length <= 0){
        return ""
    }
    else if(arr.length == 1){
        return arr[0] + "";
    }
    for(var i = 0; i < arr.length; i++){
        // console.log(i)
        if(i == arr.length - 1){
            newString += arr[i]
        }
        else{
            newString += arr[i] + separator
        }
    
        
    }
    return newString
}

console.log(join(arr1, separator1))
console.log(join(arr2, separator2))
console.log(join(arr3, separator3))
console.log(join(arr4, separator4))
console.log(join(arr5, separator5))





// ***********************************************************

/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const two_nums1 = [1, 13, 14, 15, 37, 38, 70];
const two_expected1 = "1, 13-15, 37-38, 70";

const two_nums2 = [1,2,3,4,7,8,9,12,14,20,21];
const two_expected2 = "1-4, 7-9, 12, 14, 20-21";

const two_nums2 = [-2,-1,2,3];
const two_expected2 = "(-2)-(-1)";


const two_nums1 = [1, 13, 14, 15, 37, 38, 70];
const two_expected1 = "1, 13-15, 37-38, 70";

const two_nums2 = [1, 2, 3, 4, 7, 8, 9, 12, 14, 20, 21];
const two_expected2 = "1-4, 7-9, 12, 14, 20-21";

// make function.
// make an empty string.
// we loop through the array.
// if index is array length minus one, we just return the value to the string
// Move to the next index until its not consecutive and return the last value.
// if the index + 1 is equal to the value plus 1, we return the value to the string with a separator. 
// if the index + 1 is not equals to the value plus 1 we return the value to the string with different separator.
// continue through the array and move back to the original loop condition.

var sep1 = "-";
var sep2 = ",";
var newString = "";

function pageNumbers(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr.length - 1) {
      newString += arr[i];
    } else if (arr[i - 1] == arr[i] - 1 && arr[i + 1] == arr[i] + 1) {
      continue;
    } else if (arr[i + 1] == arr[i] + 1) {
      newString += arr[i] + sep1;
    } else if (arr[i + 1] != arr[i] + 1) {
      newString += arr[i] + sep2;
    }
  }
  return newString;
}

console.log(pageNumbers(two_nums2));

