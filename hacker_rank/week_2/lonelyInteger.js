


function lonelyinteger(a) {
    const map = {};

    for (let i = 0; i < a.length; i++) {
        map[a[i]] ? map[a[i]] += 1 : map[a[i]] = 1
    }
    for (let [key, value] of Object.entries(map)) {
        if (value === 1) {
            return Number(key);
        }
    }

}


console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));