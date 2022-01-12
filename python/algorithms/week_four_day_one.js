/* 
  Recursively sum an arr of ints
*/

const nums1 = [];
const expected1 = 6;


function sumArr(nums, i=0) {
    // edge cases
    if (nums.length <1){
        return false
    }

    // base case -> our ending conclusion
    if (i === nums.length-1){
        return nums[i]
    }

    // recursive statement
    return sumArr(nums, i+1) + nums[i]
}

console.log(sumArr(nums1));

// ******************************************

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.5;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;


function recursiveSigma(num, i=0) {
    if(num < 0){
        return 0
    }
    num = Math.floor(num)
    if(i === num){
        return i
    }
    return recursiveSigma(num, i+1) + i

}
console.log(recursiveSigma(two_num1))
console.log(recursiveSigma(two_num2))
console.log(recursiveSigma(two_num3))