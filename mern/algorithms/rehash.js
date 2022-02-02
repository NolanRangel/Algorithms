/* 
Given to alumni by Riot games in 2021.
*/

const str = "b70a164c32a20c10";
const expected = "a184b70c42";


//given an incorrectly string by combining letter count occurences
// return the correctly rehashed string alphabetized.
function rehash(s) {
    let results = '';
    let hashMap = {}
    let key = '';
    let value = '';
    let i = 0;
    while (i < s.length) {
        if (isNaN(parseInt(s[i]))) {
            key = s[i];
            i++;
            value = '';
            while (!isNaN(parseInt(s[i]))) {
                value += s[i];
                i++;
            }
        }
        if (hashMap.hasOwnProperty(key)) {
            hashMap[key] += parseInt(value);
        } else {
            hashMap[key] = parseInt(value);
        }
    }
    for (const arr of Object.entries(hashMap).sort()) {
        results += arr[0] + arr[1]
    }
    return results
}
console.log(rehash(str))
// HINTS: isNaN(num) , parseInt(str) 





// BONUS  -- longest substring


const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

//Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubString(str) {
    let hashMap = {};
    let longestSubstring = '';
    for (let i = 0; i < str.length; i++) {
        let j = i;
        hashMap = {};
        while (!hashMap.hasOwnProperty(str[j])) {
            hashMap[str[j]] = true;
            j++;
        }
        if (j - i > longestSubstring.length) {
            longestSubstring = str.slice(i, j);
        }
    }
    return longestSubstring.length
}

// console.log(lengthOfLongestSubString(str1));
// console.log(lengthOfLongestSubString(str2));
// console.log(lengthOfLongestSubString(str3));
// console.log(lengthOfLongestSubString(str4));