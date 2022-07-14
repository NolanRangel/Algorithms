


function findMedian(arr) {
    let map = {};
    const length = arr.length;
    let newArr = [];

    for (let i = 0; i < length; i++) {
        map[arr[i]] = 1;
    }
    for (let [key, value] of Object.entries(map)) {
        newArr.push(Number(key))
    }

    return newArr[Math.floor(newArr.length / 2)]

}




console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
console.log(findMedian([0, 1, 2, 4, 6, 5, 3, 25, 37, 12, 8, 88, 1001]));



