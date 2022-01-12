/* 
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
*/

// 

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };



function fewestCoinChangeModulus(cents) {
    output = {}
    if (cents >= 25) {
        output.quarter = Math.floor(cents / 25)
        cents %= 25;
    }
    if (cents >= 10) {
        output.dime = Math.floor(cents / 10)
        cents %= 10;
    }
    if (cents >= 5) {
        output.nickel = Math.floor(cents / 5)
        cents %= 5;
    }
    if (cents >= 1) {
        output.penny = cents;
    }

    return output
}



/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

// const two_nums1 = [3, 0, 1];
// const two_expected1 = 2;

// const two_nums2 = [3, 0, 1, 2];
// const two_expected2 = null;
// // Explanation: nothing is missing

// /* 
//   Bonus: now the lowest value can now be any integer (including negatives),
//   instead of always being 0. 
// */

// const two_nums3 = [2, -4, 0, -3, -2, 1];
// const two_expected3 = -1;

// const two_nums4 = [5, 2, 7, 8, 4, 9, 3];
// const two_expected4 = 6;



function missingValue(unorderedNums) {
    unorderedNums.sort(sortLogic);
    for (let i = 0; i<unorderedNums.length-1; i++){
            if (unorderedNums[i+1] != unorderedNums[i]+1){
                return unorderedNums[i]+1;
            }
    }
    return null;
} console.log(missingValue(two_nums3))

function sortLogic(a,b){
    //sort needs to return a pos neg or zero1 0 or -1
    return a-b;
}