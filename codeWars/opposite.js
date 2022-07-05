// Very simple, given an integer or a floating-point number, find its opposite.


function opposite(number) {
    if (number === 0) {
        return 0;
    }
    else if (number > 0) {
        return -Math.abs(number);
    }
    else {
        return Math.abs(number)
    }
}

// OR

function opposite(number) {
    return (-number);
}

console.log(opposite(1));
console.log(opposite(14));
console.log(opposite(-34));