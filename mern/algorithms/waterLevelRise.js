// loop through to find the sections where the list goes up and once it drops restart a new section
// store each  segment as its own array

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

// set maxDiff to -1 so its returned if conditions aren't met
// min set to first index of array
// set maxDiff to array index - min when the array at the index is greater than the min & the maxDiff is less than the index-min

// O(n)
function measureWaterLevels(waterLevels) {
    //Find the largest rise in water levels during a day
    let maxDiff = -1;
    let min = waterLevels[0];
    for (let i = 0; i < waterLevels.length; i++) {
        if (waterLevels[i] > min && maxDiff < waterLevels[i] - min) {
            maxDiff = waterLevels[i] - min;
<<<<<<< HEAD
        }
        if (waterLevels[i] < min) {
            min = waterLevels[i];
        }
    }
    return maxDiff
}

=======
        }
        if (waterLevels[i] < min) {
            min = waterLevels[i];
        }
    }
    return maxDiff
}
console.log(measureWaterLevels(riverLevels1));
console.log(measureWaterLevels(riverLevels2));
console.log(measureWaterLevels(riverLevels3));
console.log(measureWaterLevels(riverLevels4));
console.log(measureWaterLevels(riverLevels5));
console.log(measureWaterLevels(riverLevels6));
console.log(measureWaterLevels(riverLevels7));


function measureWaterLevels(waterLevels) {
    let maxRise = 0;
    let i = 0;
    while (i < waterLevels.length) {
        let currentRise = 0;
        while (waterLevels[i + 1] < waterLevels[i]) {
            i++;
        }
        while (waterLevels[i + 1] > waterLevels[i]) {
            currentRise += waterLevels[i + 1] - waterLevels[i];
            i++;
        }
        currentRise > maxRise && (maxRise = currentRise);
        i++;
    }
    return maxRise > 0 ? maxRise : -1
}


>>>>>>> a73fb0c55ad07f9baa00eaa2c181f0dc6177c06e
console.log(measureWaterLevels(riverLevels1));
console.log(measureWaterLevels(riverLevels2));
console.log(measureWaterLevels(riverLevels3));
console.log(measureWaterLevels(riverLevels4));
console.log(measureWaterLevels(riverLevels5));
console.log(measureWaterLevels(riverLevels6));
console.log(measureWaterLevels(riverLevels7));
<<<<<<< HEAD


    // O(n^2)
    // function measureWaterLevels(waterLevels) {
    //     let maxRise=0;
    //     let i = 0;
    //     while(i < waterLevels.length){
    //         let currentRise = 0;
    //         while(waterLevels[i+1] < waterLevels[i]){
    //             i++;
    //         }
    //         while(waterLevels[i+1] > waterLevels[i]){
    //             currentRise += waterLevels[i+1] - waterLevels[i];
    //             i++;
    //         }
    //         currentRise > maxRise && (maxRise=currentRise);
    //         i++;
    //     }
    //     return maxRise > 0 ? maxRise : -1
    // }


    // console.log(measureWaterLevels(riverLevels1));
    // console.log(measureWaterLevels(riverLevels2));
    // console.log(measureWaterLevels(riverLevels3));
    // console.log(measureWaterLevels(riverLevels4));
    // console.log(measureWaterLevels(riverLevels5));
    // console.log(measureWaterLevels(riverLevels6));
    // console.log(measureWaterLevels(riverLevels7));
=======
>>>>>>> a73fb0c55ad07f9baa00eaa2c181f0dc6177c06e
