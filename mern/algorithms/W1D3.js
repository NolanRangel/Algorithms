
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function insertionSort(nums) {
    if(nums.length < 2){
        return nums
    }
    for(let i = 1; i < nums.length; i++){
        let j = i;
        while(nums[j] < nums[j-1] && j > 0){

            temp = nums[j]
            nums[j] = nums[j-1]
            nums[j-1] = temp

            j--
        }
    }
    return nums
}

console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));

//given an unsorted array, sort the array using insertSort
// i.e. sort the first element. When it goes the a new element, move the element to the right position. 

// step1: [9, 2, 5, 6, 4]; (9 is sorted)
// step2: [2, 9, 5, 6, 4]; ([2,9] is sorted)
// step3: [2, 5, 9, 6, 4]; ([2,5,9] is sorted)
// 5 is smaller than 9, so we move 5 to the right position.
// step4: [2, 5, 6, 9, 4]; ([2,5,6,9] is sorted) 
// step5: [2, 4, 5, 6, 9]; ([2,4,5,6,9] is sorted) 
// Need a variable to track "min:
// Take a number and check if the number after it is smaller
// If it is, make that number the new "min" and keep going
// If at the end, the number we started with is smaller then the min, they switch places


// BONUS 
function merge(arr1, arr2){

    const mergedArr = arr1.concat(arr2);
    insertionSort(mergedArr);
    return mergedArr;

}

console.log();
console.log();
console.log();
console.log();

  // given 2 sorted array, combine them and return 1 sorted array. 

const sortedA1 = [];
const sortedB1 = [];
//expected output: [];

const sortedA2 = [5];
const sortedB2 = [2];
//expected output: [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
//expected output: [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 6, 9];
const sortedB4 = [3, 7, 8, 10];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10];