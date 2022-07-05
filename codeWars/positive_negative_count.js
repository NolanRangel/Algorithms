// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// edge cases: 0 is neither positive nor negative
// two variables to track even count and odd count 
// loop over the array
// modulo check for even and odd
// add to count variables  ( += )

function countPositivesSumNegatives(input) {

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 0) {
            if (input[i] > 0) {
                evenCount++;
            }
            else if (input[i] < 0) {
                oddCount += input[i];
            }
        }

    }
    return [evenCount, oddCount];

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));