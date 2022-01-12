/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];


// create new list variable to push into
// use .length to check the arr lengths
// set variable to equal the longest
// use that variable to iterate through the longest arr
// push the iteration os both arr into new list (arrA1[i] )

function interleaveArrays(arr1, arr2) {
    var expected = []
    var bigArray = arr1
    var smallArray = arr2
    if (bigArray < smallArray) {
        bigArray = arr2;
        smallArray = arr1;
    }
    for (let i = 0; i < bigArray.length; i++) {
        expected.push(bigArray[i]);
        if (smallArray[i] != undefined) {
            expected.push(smallArray[i]);
        }
    }
    return expected
}



console.log(interleaveArrays(arrA1, arrB1))
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;


function binarySearch(sortedNums, searchNum) {
    let beginIndex = 0;
    let endIndex = sortedNums.length-1;
    let midIndex = Math.floor(endIndex/2);
    while (sortedNums[midIndex] != searchNum){
        if(sortedNums[midIndex] > searchNum){
            if(midIndex === beginIndex){
                return false
            }
            endIndex = midIndex-1;
        }
        else if(sortedNums[midIndex] < searchNum){
            if(midIndex === endIndex){
                return false
            }
            beginIndex = midIndex+1;
        }
        midIndex = Math.floor((beginIndex+endIndex)/2);
    }
    return true
}