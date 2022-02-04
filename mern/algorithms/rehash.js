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
        if (isNaN(parseInt(s[i]))) {        //if its a letter
            key = s[i];                     //set key to equal the letter
            i++;                            //incriment i which moves us to a number
            value = '';
            while (!isNaN(parseInt(s[i]))) { //since i was incremented, the index is on a number, so while its a number
                value += s[i];               // attach the number to value. value will concatinate, not add, because it is a string
                i++;                         // i will be incrtimented from within this while loop so it will progress through the str
            }                                 // and progress through to the next if check.
        }
        if (hashMap.hasOwnProperty(key)) {      //checks hashMap for the key
            hashMap[key] += parseInt(value);    //if its there, convert the value to a number and add it to the k,v hashmap *value is still a number
        } else {
            hashMap[key] = parseInt(value);     // if its no there, create it and convert the value to a number and set it
        }
    }
    for (const arr of Object.entries(hashMap).sort()) {     //loop through the hashMap grabbing all of the keys and associated values as arr[0] : arr[1]
        results += arr[0] + arr[1]                          // set results which is set to a string which converts the return back into a string
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