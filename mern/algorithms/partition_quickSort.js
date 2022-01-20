


const nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

function partition(nums, left, right){
  let pivot = nums[Math.floor((left + right)/2)]
  console.log(pivot)
  while(left != right){
    while(nums[left]< pivot){
      left++
    }
    while(nums[right]> pivot){
      right--
    }
    console.log(`before: ${nums}`)
    let temp = nums[right]
    nums[right] = nums[left]
    nums[left] = temp
    console.log(`after: ${nums}`)
  }
  return right
}


// console.log(partition(nums1, 0, nums1.length-1));
// console.log(partition(nums2, 0, nums1.length-1));
// console.log(partition(nums3, 0, nums1.length-1));
// console.log(partition(nums4, 0, nums1.length-1));


// console.log(partition(nums1, 0, nums1.length-1))

function quickSort(nums, left, right){
  if(left<right){
        let p = partition(arr, left, right);
        quicksort(arr, left, p-1);
        quicksort(arr, p+1, right);
    }
    return arr
}


console.log(quickSort(nums1));
console.log(quickSort(nums2));
console.log(quickSort(nums3));
console.log(quickSort(nums4));