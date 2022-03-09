// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


function even_or_odd(number) {

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

}

console.log(even_or_odd(1));
console.log(even_or_odd(2));
console.log(even_or_odd(3));
console.log(even_or_odd(4));