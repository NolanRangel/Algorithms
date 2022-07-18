


// function diagonalDifference(arr) {
//     let primary = 0;
//     let secondary = 0;
//     let length = arr.length;


//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length; j++) {
//             if (j === i) {
//                 primary += arr[i][j]
//             }
//             if (j === (length - i) - 1) {
//                 secondary += arr[i][j]
//             }
//         }
//     }

//     return Math.abs(primary - secondary)

// }

function diagonalDifference(arr) {
    let lrdiag = 0;
    let rldiag = 0;
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        lrdiag += arr[i][i];
        rldiag += arr[i][(length - i) - 1]
    }
    return Math.abs(lrdiag - rldiag)
}


console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));