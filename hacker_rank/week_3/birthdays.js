


function birthday(s, d, m) {
    // Write your code here
    let counter = 0;
    let prev = 0;

    if (s.length === 1 && s[0] === d) {
        counter++;
    }

    for (let i = 0; i < s.length - 1; i++) {
        for (let j = 0; j < m; j++) {
            prev += s[i + j]
        }
        if (prev === d) {
            counter++;
        }
        prev = 0;
    }
    return counter;

}



console.log(birthday([2, 2, 1, 3, 2], 4, 2));
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([4], 4, 1));