





/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

// HAVE A LOOP THAT ITERATES THROUGH AND CHECKS FOR A SPACE
// ONCE IT FINDS THAT SPACE REVERSE THAT WORD 

function reverseWords(str) {
    var newStr = "";

    for(var j = 0; j < str.length;j++){
        if(str[j + 1] === " " || j === str.length - 1){
            for(var i = j; i >= 0; i--){
                if(str[i] === " "){
                    break
                }
                newStr += str[i];
            }
            if(j != str.length - 1)
            newStr += " ";
        }
    }
    return newStr
}

console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))

/*****************************************************************************/


/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

// loop backwards checking for whitespace
// once whitespcae is found loop forward until whitespace or end string and add to  new string


function reverseWordOrder(str) {
    var newStr = "";

    for(var i = str.length - 1; i >= 0; i--){           
        if(str[i - 1] === " " || i == 0){               
            for(var j = i; j < str.length; j++){
                if(str[j] === " "){
                    break
                }
                newStr += str[j];
            }
            if(i != 0){
                newStr += " ";
            }
        }
    }
    return newStr
}

console.log(reverseWordOrder(str1))