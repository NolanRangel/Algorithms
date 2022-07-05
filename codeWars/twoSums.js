
// need one index to stay in place
//  need another index to loop through the array 
// keep iterating with the stationary index until its at the end


var twoSum = function (nums, target) {

    // const answer = []
    let j = {}

    for (let i = 0; i < nums.length; i++) {
        // console.log(!j.contains);
        if (j.hasOwnProperty(nums[i])) {
            // answer.push(j, i)
            console.log(true);
        }
    }

}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));