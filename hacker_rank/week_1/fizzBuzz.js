


function fizzBuzz(n) {
    const arr = [];

    for (let j = 1; j <= n; j++) {
        arr.push(j)
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            console.log('FizzBuzz');
        } else if (arr[i] % 3 === 0) {
            console.log('Fizz');
        } else if (arr[i] % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(arr[i]);
        }
    }

}

fizzBuzz(15);
console.log('******');
fizzBuzz(25);
console.log('******');
fizzBuzz(50);
console.log('******');
fizzBuzz(100);