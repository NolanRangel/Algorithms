
// write the function isAnagram
var isAnagram = function (test, original) {
    let map1 = {};
    let map2 = {};

    if (test.length !== original.length) {
        return false;
    }

    for (let i = 0; i < test.length; i++) {
        let lowerC = test[i].toLowerCase()
        // console.log(lowerC);

        if (!map1[lowerC]) {
            map1[lowerC] = 1;
        } else {
            map1[lowerC]++;
        }
    }

    for (let j = 0; j < original.length; j++) {
        let lowerC2 = original[j].toLowerCase();
        // console.log(lowerC2);

        if (!map2[lowerC2]) {
            map2[lowerC2] = 1;
        } else {
            map2[lowerC2]++;
        }
    }

    for (const [key, value] of Object.entries(map1)) {
        if (map2[key] === undefined) {
            return false;
        } else if (value !== map2[key]) {
            return false;
        } else {
            return true;
        }
    }


};


console.log(isAnagram('foefet', 'toffee'));
console.log(isAnagram('Buckethead', 'DeathCubeK'));
console.log(isAnagram('dumble', 'bumble'));
console.log(isAnagram('ound', 'round'));