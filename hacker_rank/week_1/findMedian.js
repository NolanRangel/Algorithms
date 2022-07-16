



// function findMedian(arr) {
//     // let map = {};
//     // const length = arr.length;
//     // let newArr = [];

//     // for (let i = 0; i < length; i++) {
//     //     map[arr[i]] = i;
//     // }
//     // for (let [key, value] of Object.entries(map)) {
//     //     // let index = Number(key)
//     //     newArr.push(Number(value))
//     // }
//     // // if (newArr[Math.floor(newArr.length / 2)] === value) {
//     // //     return value

//     // // }
//     // console.log(map);
//     // console.log(newArr);


//     return arr[Math.floor(newArr.length / 2)

// }



function findMedian(arr) {
    let sorted = arr.sort()

    for (let a of sorted) {
        if (a === Math.floor(sorted.length / 2)) {
            return a
        } else if (a === Math.floor((sorted.length / 2)) * -1) {
            return a * -1
        }
    }
}


console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
console.log(findMedian([-2, -1, 0, -1, 2, -4, -6, 5, 3]));
console.log(findMedian([0, 1, 2, 4, 6, 5, 3, 25, 37, 12, 8, 88, 1001]));



