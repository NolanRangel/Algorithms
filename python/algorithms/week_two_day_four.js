/* 
    String: Rotate String

    Create a standalone function that accepts a string and an integer,
    and rotates the characters in the string to the right by that given
    integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

// BONUS
const rotateAmnt = -2;
const expected6 = "llo WorldHe"

/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/
// PSUEDO CODE
// create new variable and set to a string
// if(rotateAmnt > str.length)
//      rotateAmnt % str.length = variable
// use rotateAmnt as the amount to take off the back
// use that to push into new string
// grab the rest and ush into new string
// return new string


function rotateStr(str, amnt) {
    var newStr = "";

    if(amnt > str.length){
        amnt = amnt % str.length;
    }
    if(amnt < 0){
        amnt += str.length
    }
    for(var i = str.length - amnt; i < str.length; i++){
        // console.log(str[i]);
        newStr += str[i];
    }
    for(var j =0; j < str.length - amnt; j++){
        newStr += str[j]
    }
    return newStr
}

console.log(rotateStr(str, rotateAmnt2))
console.log(rotateStr(str, rotateAmnt3))
console.log(rotateStr(str, rotateAmnt4))
console.log(rotateStr(str, rotateAmnt5))
console.log(rotateStr(str, rotateAmnt))



/* 
    Create the function isRotation(str1,str2) that
    returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
const two_expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const two_expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

// create an emtp object
// create a for loop to run through the giben and populat the empty object with the string with key value pairs
// key equals curren value equals the next index
// 

function isRotation(s1, s2) {
    if(s1.length != s2.length || s1 === s2){
        return false
    }

    let combined = s1 + s1
    console.log(combined);

    return (combined.includes(s2))


 }

console.log(isRotation(strA1, strB1))
console.log(isRotation(strA2, strB2))