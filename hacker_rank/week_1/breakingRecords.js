
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

// create a min variable and a max variable and update as it goes through the list
// create a minCount and maxCount variable. every time min and max changes, update the correlated count
// return an array [broke most point records, broke least point records]


function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;
    let i = 1;

    while (i < scores.length) {
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
            i++;
        }
        else if (scores[i] > max) {
            max = scores[i];
            maxCount++;
            i++;
        }
        else {
            i++
        }
    }


    return [maxCount, minCount]



}




console.log(breakingRecords([12, 24, 10, 24]))
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(breakingRecords([100, 45, 41, 60, 17, 41, 45, 43, 100, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50]))
console.log(breakingRecords([100000, 9, 3, 10, 2, 20]))

