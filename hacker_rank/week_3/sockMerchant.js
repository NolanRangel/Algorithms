function sockMerchant(n, ar) {
    // Write your code here
    let map = {};
    let counter = 0;

    for (let i = 0; i < n; i++) {
        if (!map[ar[i]]) {
            map[ar[i]] = 1;
        } else {
            map[ar[i]] += 1;
        }
    }

    let v = Object.values(map);
    for (let j = 0; j < v.length; j++) {
        if (v[j] % 2 !== 0) {
            v[j] = v[j] - 1;
        } else {
            continue;
        }
    }

    for (let s of v) {
        if (s > 2) {
            let amount = s / 2;
            counter += amount;
        } else if (s === 2 && s !== 0) {
            counter++;
        }

    }

    return counter;

}



console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));