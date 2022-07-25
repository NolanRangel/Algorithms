


function maximumPerimeterTriangle(sticks) {
    // Write your code here
    // function to number correctly
    // https://www.freecodecamp.org/news/javascript-array-sort-tutorial-how-to-use-js-sort-methods-with-code-examples/
    const s = sticks.sort((a, b) => {
        return a - b
    }).reverse()
    console.log(s);

    for(let i = 0; i < sticks.length ; i++) {
        if(s[i] < s[i + 1] + s[i + 2]) {
            return [s[i + 2], s[i + 1], s[i]];
        }
    }
    return [-1];
}


console.log(maximumPerimeterTriangle([1,2,3]));
console.log(maximumPerimeterTriangle([1,1,1,2,3,5]));
console.log(maximumPerimeterTriangle([1,1,1,3,3]));
console.log(maximumPerimeterTriangle([9, 2015, 5294, 58768, 285, 477, 72, 13867, 97, 22445, 48, 36318, 764, 8573, 183, 3270, 81, 1251, 59, 95094]));