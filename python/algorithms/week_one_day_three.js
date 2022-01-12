/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive letters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

// PSUEDO CODE
// make function to encode string
// make empty string variable
// check length of string
// if it > 2
// start loop that will kepp our place in the given string
// check to see if the next char is the same as the current char
// if it is, 
// set a new count variable to 1
// start a new loop that finds a char that is not the same our current main loop position
// add to new string the char at our main loop position and our count
// add our count to the main loop index and subtract 1
// outside of the main loop return new string


const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str5 = "aaaabbcdddaaa";
const expected5 = "a4b2c1d3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";


function encodeStr(str) {
    encoded_string = "";
    if (str.length <= 2) {
        return str;
    }
    for (var i = 0; i < str.length; i++) {
        var count = 1;

        while (str[i] === str[i + count]) {
            count++
        }
        encoded_string += str[i] + count;
        i += count - 1
    }
    if (encoded_string.length < str.length) {
        return encoded_string;
    }
    else {

    }
    return str;
}


console.log(encodeStr(str1))
console.log(encodeStr(str5))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))

//   *****************************************************************************

/* 
  String Decode  
*/

// create a function to decode string
// create new string variable
// create an index variable set to 0
// create temp variable that grabs letter
// start a loop 
// 

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";


function decodeStr(str) {
    
 }
