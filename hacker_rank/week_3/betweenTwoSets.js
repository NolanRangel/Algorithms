
// a = multiples of a
// b = divisible by b

// find the largest number within the arrays to have a max stopping point for all loops
// find the similar multiple of a[i] up to largest
// fing the similar multiples of b[i] from the largest to 0


const getTotal = (a, b) => {
    let result = 0;
    let isFactorMultiple = true;
    const length = a.length >= b.length ? a.length : b.length;
    let maxA = a[0];
    let minB = b[0];


    for (let i = 0; i < length; i++) {
        if (a[i] > maxA) {
            maxA = a[i];
        }
        if (b[i] < minB) {
            minB = b[i];
        }
    }

    for (let j = maxA; j <= minB; j++) {
        for (let elem of a) {
            if (j % elem !== 0) {
                isFactorMultiple = false;
                // break
            }
        }
        for (let elem of b) {
            if (elem % j !== 0) {
                isFactorMultiple = false;
                // break
            }
        }
        if (isFactorMultiple === true) {
            result++
        }
    }

    return result

}


console.log(getTotal([2, 6], [24, 36]));
console.log(getTotal([2, 3], [2, 4]));