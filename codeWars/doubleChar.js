// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        newStr += str[i];
        newStr += str[i];
    }
    return newStr;
}
console.log(doubleChar("String"));
console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_ "));