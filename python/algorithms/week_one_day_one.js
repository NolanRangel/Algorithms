/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */

// psuedo code
// - create a function that takes in string
// - create create new string
// - loop through given string starting at the end
// - add the current index to the new string
// - iterate down
// - repeat until you get to the beginning

function reverseString(str) {
	var newString = ""

	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
		// console.log(newString)
	}
	return newString
}
console.log(reverseString(str1));


// *****************************************

/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

// psuedo code
// - create a function that takes in the string
// - create a new variable to recieve new string
// - create a conditional that looks for the first letter of each word
// - then returns a new string with all the first letters capitalized


function acronymize(str) {
	var acronym = ""

	for (var i = 0; i < str.length; i++) {
		if (i === 0) {
			acronym += str[i].toLocaleUpperCase();
		}
		else if (str[i - 1] === " ") {
			acronym += str[i].toLocaleUpperCase();
		}

	}
	return acronym
}
console.log(acronymize(str1))
