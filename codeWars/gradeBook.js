// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// create variable to hold the sum of all three
// create variable to hold the average
// add up all three parameters and divide the sum by three
// check the outcome with the grading ruberic above

function getGrade(s1, s2, s3) {
    let sum;
    let score;

    sum = s1 + s2 + s3
    score = sum / 3

    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B"
    }
    else if (score >= 70) {
        return "C"
    }
    else if (score >= 60) {
        return "D"
    }
    else {
        return "F"
    }


}

