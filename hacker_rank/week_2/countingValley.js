


function countingValleys(steps, path) {
    // Write your code here
    let feet = 0;
    let hike = [];
    let valleys = 0;

    for (let i = 0; i <= steps - 1; i++) {
        if (path[i] === 'D') {
            feet -= 1;
        } else {
            feet += 1;
        }
        hike.push(feet);
    }
    for (let j = 0; j < hike.length; j++) {
        if (hike[j - 1] === -1 && hike[j] === 0) {
            console.log(hike[j], '|||');
            valleys += 1
        }

    }

    return (valleys);
}


console.log(countingValleys(8, 'UDDDUDUU'));
console.log('***********');
console.log(countingValleys(12, 'DDUUDDUDUUUD'));