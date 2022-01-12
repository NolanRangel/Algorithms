/* 
Parens Valid
Given an str that has parentheses in it
return whether the parentheses are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

// create a function that takes in a string
// loop through the given string 
// use a locator and locate open and closing paranthese
// count the opening and count the closing
// use a modulo to return true if even and return false if odd


function parensValid(str) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            count++
        }
        if (str[i] === ')') {
            count--
        }
        if (count === -1) {
            return false
        }
    }
    if (count === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))



/*****************************************************************************/

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/


const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;


function bracesValid2(str) {
    const stack = [];

    const opens = "({[";

    const closeToOpen = { ")": "(", "}": "{", "]": "[" };

    for (let i = 0; i < str.length; i++) {
        if (opens.includes(str[i])) {
            stack.push(str[i]);
        } else if (str[i] in closeToOpen) {
            if (closeToOpen[str[i]] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(bracesValid2(str1))
console.log(bracesValid2(str2))
console.log(bracesValid2(str3))

