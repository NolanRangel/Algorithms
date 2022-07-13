const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Pseudocode
// outer for loop (var i) that starts at the length of the array decrements to 0
// inner for loop (var j) that loops from 0 to the outer loop variable (i)
// check if the arr[j+1] > arr[j]
// if so, swap the two values using a temp variable
// after outer loop finishes, return the array


function bubbleSort(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
};

console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));


//given an unsorted array, sort the array using selectionSort
// i.e. find the largest value and put it at the end


// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));