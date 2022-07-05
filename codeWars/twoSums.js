


var twoSum = function (nums, target) {
    const seenNums = {};
    let runningNum;

    for (let i = 0; i <= nums.length - 1; i++) {
        runningNum = target - nums[i];
        if (seenNums.hasOwnProperty(runningNum)) {
            return [seenNums[runningNum], i]
        } else {
            seenNums[nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));