// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
    let midChar = ""
    if (s.length === 1) {
        return s;
    }
    if (s.length % 2 === 0) {
        let half = s.length / 2;
        let first = s.charAt(half - 1);
        let second = s.charAt(half);
        midChar += first + second;
    }
    else {
        let half = s.length / 2;
        let char = s.charAt(Math.floor(half));
        midChar += char;
    }
    return midChar;
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));