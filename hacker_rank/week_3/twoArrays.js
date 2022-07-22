


function twoArrays(k, A, B) {
    // Write your code here
    const arrA = A.sort();
    const arrB = B.sort().reverse();

    for (let i = 0; i < A.length; i++) {
        if (arrA[i] + arrB[i] < k) {
            return 'NO'
        }
    }
    return 'YES'
}



console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]));
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));