


function countingSort(arr) {
    // Write your code here
    let map = {};
    let result = []

    for (let i = 0; i < 100; i++) {
        result.push(0);
    }
    for (let j = 0; j < arr.length; j++) {
        if (map[arr[j]]) {
            map[arr[j]] += 1
        } else {
            map[arr[j]] = 1
        }
    }
    for (const [key, value] of Object.entries(map)) {
        result[Number(key)] = value
    }

    return result;
}

console.log(countingSort([1, 1, 3, 2, 1]));
