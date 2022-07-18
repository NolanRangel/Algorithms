


function flippingBits(n) {

    let bits = (2 ** 32 - 1) - n

    return bits

}


console.log(flippingBits(2147483647));
console.log(flippingBits(1));
console.log(flippingBits(0));
console.log(flippingBits(9));