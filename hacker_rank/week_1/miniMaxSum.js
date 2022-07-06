

// create two variables min and max
// min will be added all the indexes except the last one and opposite for the min


function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let accMin = 0;
    let accMax = 0;
    let length = arr.length - 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < max) {
            accMin += arr[j];
        }
        if (arr[j] > min) {
            accMax += arr[j]
        }
        if (arr[j] === arr[j + 1]) {
            accMin += arr[j];
            accMax += arr[j];
        }
    }

    console.log(accMin, accMax);
}



miniMaxSum([1, 3, 5, 7, 9])
miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([7, 69, 2, 221, 8974])
miniMaxSum([5, 5, 5, 5, 5])