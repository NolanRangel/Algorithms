

function pickingNumbers(a) {
    // Write your code here
    let counter = 1;
    let max = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < a.length; j++) {
            if ((a[i] - a[j]) <= 1 && (a[i] - a[j]) >= 0) {
                counter++;
            }
        }
        if (counter > max) {
            max = counter;
            counter = 1;
        } else {
            counter = 1;
        }
    }
    return max;
}


console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));