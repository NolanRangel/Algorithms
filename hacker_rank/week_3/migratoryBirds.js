function migratoryBirds(arr) {
    // Write your code here
    let map = {};
    let maxValue = 0;
    let minKey = [];

    for (let i = 0; i < arr.length; i++) {
        !map[arr[i]] ? map[arr[i]] = 1 : map[arr[i]] += 1;
    }

    console.log(map);
    for (const [key, value] of Object.entries(map)) {
        if (value > maxValue) {
            maxValue = value
            if (value === maxValue) {
                maxValue = value
                minKey.pop()
                minKey.push(key)
            }
        }
    }

    return minKey[0]
}


console.log(migratoryBirds([1, 1, 2, 2, 3]));
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(migratoryBirds([2, 4, 3, 2, 3, 1, 2, 1, 3, 3]));        //3