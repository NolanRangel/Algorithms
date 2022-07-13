


function findMedian(arr) {
    // Write your code here
    let sortedArr = [];
    let total = 0;
    const length = arr.length / 2;

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                console.log(arr[min], '^^^');
                console.log(arr[j], '***');
                min = j
            }
            if (min !== i) {
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
            }
        }
    }
    let median = Math.floor(length)


    return arr[median];
}


console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));