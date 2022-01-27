const students = [
    {
        firstName: "Jane",
        lastName: "Doe",
        habits: [
            "doesn't wash dishes",
            "falls asleep in lecture",
            "shows up early",
        ],
    },
    {
        firstName: "John",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Arya",
        lastName: "Stark",
        habits: ["Doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Jon",
        lastName: "Snow",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
const expected2 = ["John Smith", "Arya Stark"];

const badHabit3 = "different naming for variables";
const expected3 = [];


function santasNaughtyList(persons, badHabit) {
    let results = [];
    for (const obj of persons) {
        if (obj.hasOwnProperty('habits')) {
            for (const habit of obj.habits) {
                if (habit.toLowerCase() === badHabit.toLowerCase()) {
                    if (obj.hasOwnProperty('firstName') && obj.hasOwnProperty('lastName')) {
                        results.push(`${obj.firstName} ${obj.lastName}`)
                    }
                }
            }
        }
    }
    return results;
}

console.log(santasNaughtyList(students, badHabit1));
console.log(santasNaughtyList(students, badHabit2));
console.log(santasNaughtyList(students, badHabit3));

function santasNaughtyListFunctional(persons, badHabit) {
    let results = [];
    for (const obj of persons) {
        if (obj.hasOwnProperty('habits')) {
            if (obj.habits.includes(badHabit)) {
                if (obj.hasOwnProperty('firstName') && obj.hasOwnProperty('lastName')) {
                    results.push(`${obj.firstName} ${obj.lastName}`)
                }
            }
        }
    }
    return results;
}




console.log(santasNaughtyListFunctional(students, badHabit1));
console.log(santasNaughtyListFunctional(students, badHabit2));
console.log(santasNaughtyListFunctional(students, badHabit3));
