/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter



function mode(nums) {
    console.log("*****************");
    if (nums.length <= 1){
        return nums
    }

    let mode = []
    let freq = {}
    let maxFreq = 0
    let allSameFreq = true

    for (const num of nums) {
        // if (freq.hasOwnProperty(num)){
        //     freq[num]++
        // } else {
        //     freq[num] = 1
        // }
        freq.hasOwnProperty(num) ? freq[num]++ : (freq[num] = 1)

        if (freq[num] > maxFreq){
            maxFreq = freq[num]
        }
    }

    for (const key in freq) {
        // console.log(freq[key]);
        if (freq[key] === maxFreq){
            mode.push(+key)
        } else {
            allSameFreq = false
        }
    }
    console.log(mode);
    return allSameFreq ? [] : mode
}

console.log(mode(nums3));
console.log(mode(nums4));
console.log(mode(nums5));

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))


// *******************************************************************

/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const two_str1 = "abcABC";
const two_expected1 = "abcABC";

const two_str2 = "helloo";
const two_expected2 = "helo";

// bonus
const two_str3 = "hellool";
const two_expected3 = "heol";




function stringDedupe(str) {
    let distinctStr = ""
    let seen = {}

    for (let i=str.length - 1; i >=0; i--){
        if (!seen[str[i]]){
            // console.log("not seen");
            seen[str[i]] = true
            distinctStr = str[i] + distinctStr
        }
    }
    return distinctStr
}

console.log(stringDedupe(two_str1));
console.log(stringDedupe(two_str2));
console.log(stringDedupe(two_str3));