
/* 
1. create a hash map to count for: positive num, zero, and negative num
2. create a variable for the length of the array
3. loop throught the given array, counting the positive, negative numbers and any zeroes
4. print out the value
*/


function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let length = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 1) {
            positive++
        }
        if (arr[i] <= -1) {
            negative++
        }
        if (arr[i] === 0) {
            zero++
        }

    }
    let postiveValue = positive / length
    let pV = postiveValue.toFixed(6)

    let negativeValue = negative / length
    let nV = negativeValue.toFixed(6)

    let zeroValue = zero / length
    let zV = zeroValue.toFixed(6)


    console.log(pV);
    console.log(nV);
    console.log(zV);


}

plusMinus([1, 1, 0, -1, -1])
plusMinus([-4, 3, -9, 0, 4, 1])