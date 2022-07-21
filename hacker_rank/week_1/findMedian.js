



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
    let length = arr.length;

    for (let i = 0; i < parseInt(length); i++) {
        for (let j = 0; j < parseInt(length); j++) {
            if (parseInt(arr[i]) < parseInt(arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }

    let result = Math.ceil(parseInt(length - 1) / 2);
    return arr[result];

}


console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
console.log(findMedian([-2, -1, 0, -1, 2, -4, -6, 5, 3]));
console.log(findMedian([0, 1, 2, 4, 6, 5, 3, 25, 37, 12, 8, 88, 1001]));



