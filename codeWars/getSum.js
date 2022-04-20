// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


function getSum(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    }
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }

    return sum;
}

//OR

function getSum(a, b) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
}

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));