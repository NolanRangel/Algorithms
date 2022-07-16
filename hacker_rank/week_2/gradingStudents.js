


function gradingStudents(grades) {
    // Write your code here
    let gradeBook = [];

    for (let g of grades) {
        if (g < 38) {
            gradeBook.push(g);
        } else if (g >= 38 && (g % 5) >= 3) {
            gradeBook.push(Math.ceil(g / 5) * 5);
        } else {
            gradeBook.push(g)
        }
    }
    return gradeBook;
}

// function gradingStudents(grades) {
//     return grades.map(grade => grade >= 38 && grade % 5 >= 3 ? grade + (5 - (grade % 5)) : grade);
// }

function gradingStudents(grades) {
    grades.forEach((grade, i) => {
        const rest = 5 - grade % 5;
        if (grade >= 38 && rest < 3) grades[i] += rest;
    });
    return grades;
}




console.log(gradingStudents([38, 84, 29, 57]));
console.log(gradingStudents([73, 67, 38, 33]));



