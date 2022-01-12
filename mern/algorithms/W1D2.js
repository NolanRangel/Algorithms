// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let selectionSort = (nums) => {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (nums[min] > nums[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = nums[i];
            nums[i] = nums[min];
            nums[min] = tmp;
        }
    }
    return nums;
}



console.log(selectionSort(numsOrdered))
console.log(selectionSort(numsRandomOrder))
console.log(selectionSort(numsReversed))


function insertionSort(nums) {
    //given an unsorted array, sort the array using insertSort
    // i.e. sort the first element. When it goes the a new element, move the element to the right position. 

    // step1: [9, 2, 5, 6, 4]; (9 is sorted)
    // step2: [2, 9, 5, 6, 4]; ([2,9] is sorted)
    // step3: [2, 5, 9, 6, 4]; ([2,5,9] is sorted)
    // 5 is smaller than 9, so we move 5 to the right position.
    // step4: [2, 5, 6, 9, 4]; ([2,5,6,9] is sorted) 
    // step5: [2, 4, 5, 6, 9]; ([2,4,5,6,9] is sorted) 
}


// Need a variable to track "min:
// Take a number and check if the number after it is smaller
// If it is, make that number the new "min" and keep going
// If at the end, the number we started with is smaller then the min, they switch places